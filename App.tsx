import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Button, Image} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { useState } from 'react/cjs/react.development';

import Avatar from './Components/Avatar/Index'
import Pessoal from './Components/Pessoal/Index'
import Profissional from './Components/Profissional/Index'
import Habilidades from './Components/Habilidades/Index'
import IPersona from './Components/Persona';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';


var av1 = require('./img/menina1.jpg')
var av2 = require('./img/menina2.jpg')
var av3 = require('./img/menino1.jpg')
var av4 = require('./img/nim.jpg')

var ad1 = "https://static.vecteezy.com/ti/vetor-gratis/p2/4819322-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg"
var ad2 = "https://static.vecteezy.com/ti/vetor-gratis/t1/2275811-avatar-mulher-loira-perfil-icone-de-garota-sorridente-vetor.jpg"
var ad3 = "https://static.vecteezy.com/ti/vetor-gratis/p2/4819327-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg"
var ad4 = "img/nim.jpg"

 

const labels = ["Avatar","Pessoal","Profissional","Habilidades"];
const customStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize:40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#008080',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#008080',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#008080',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#008080',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 16,
  currentStepIndicatorLabelFontSize: 18,
  stepIndicatorLabelCurrentColor: '#008080',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#008080'
}

const FORMS = [
  {component: Avatar},
  {component: Pessoal},
  {component: Profissional},
  {component: Habilidades},
]
function ima2(x){
  if(x === 2){
    return ad1;
  }else if(x===3){
    return ad2;
  }else if(x===4){
    return ad3;
  }else{
    return ad4;
  }
   
}
export default function App() {
  const [currents,setcurrents] = useState(0);
  const [form, setForm] = useState<IPersona>({} as IPersona)
  const [tab, settab] = useState(false)
  const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body>
    <div style="text-align: center;">
      <h1>${form.nome}</h1>
      <img src=${ima2(form.foto)} width="134" height="142">
    </div>
  <p>Idade: ${form.idade}</p>
  <p>Sexo: ${form.sexo}</p>
  <p>Escolaridade: ${form.escolaridade}</p>
  <p>Telefone: ${form.telefone}</p>
  <p>Email: ${form.sexo}</p>
  <h2>Dados trabalhistas</h2>
  <p>Setor: ${form.setor}</p>
  <p>Cargo: ${form.cargo}</p>
  <p>Chefe: ${form.superior}</p>
  <h2>Habilidades</h2>
  <p>${form.liderança?' Lider':''}</p>
  <p>${form.comunicativo?' Comunicativo':''}</p>
  <p>${form.colaborativo?' Colaborativo':''}</p>
  <p>${form.criativo?' Criativo':''}</p>
  <p>${form.gestor?' Gestor':''}</p>
  <p>${form.decidido?' Decidido':''}</p>
  </body>
</html>
`;
  
  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }
  function ima(x){
    if(x === 2){
      return av1;
    }else if(x===3){
      return av2;
    }else if(x===4){
      return av3;
    }else{
      return av4;
    }
     
  }

  function FormaPassos(){
    const Forms = FORMS[currents].component
    return(
      <>
      <Forms nextStep ={nextStep} backStep={backStep}></Forms>
      </>
    );
  }
    const nextStep = (params: IPersona) => {
      setForm({...form, ...params})
      if(currents < 3){ setcurrents(currents+1)}else{settab(true)}

    }

    const backStep = () => {
      if(currents > 0){ setcurrents(currents-1)}

    }
  
  

  return (
    
    <View style={s.container}>
      <Text style={s.titul}>Criador de Persona</Text>
      <StatusBar style="auto" />
      <StepIndicator 
        labels={labels}
        currentPosition={currents}
        customStyles = {customStyles}
        stepCount={4}
      ></StepIndicator>

        <FormaPassos />
      <Modal 
        animationType='slide'
        visible={tab}>
          <View>
            <Text style={s.titul}>{form.nome}</Text>
            <View style={{paddingLeft:130,paddingTop:20}}>  
              <Image style={{
                  padding: 20,
                  borderRadius: 20,
                  width: 150,
                  height: 140,
                  alignItems: 'center',
                }
              }source={ima(form.foto)}/>
            </View>
            <Text style={{paddingLeft:10,paddingTop:10, fontSize:16}}>Idade: {form.idade}</Text>
            <Text style={{paddingLeft:10,paddingTop:3, fontSize:16}}>Sexo: {form.sexo}</Text>
            <Text style={{paddingLeft:10,paddingTop:3, fontSize:16}}>Escolaridade: {form.escolaridade}</Text>
            <Text style={{paddingLeft:10,paddingTop:3, fontSize:16}}>Telefone: {form.telefone}</Text>
            <Text style={{paddingLeft:10,paddingTop:3, fontSize:16}}>Email: {form.email}</Text>
            <Text style={{paddingLeft:10,paddingTop:20, fontSize:18}}>Dados Trabalhistas</Text>
            <Text style={{paddingLeft:10,paddingTop:3, fontSize:16}}>Setor: {form.setor}</Text>
            <Text style={{paddingLeft:10,paddingTop:3, fontSize:16}}>Cargo: {form.cargo}</Text>
            <Text style={{paddingLeft:10,paddingTop:3, fontSize:16}}>Chefe: {form.superior}</Text>
            <Text style={{paddingLeft:10,paddingTop:3, fontSize:16}}>Habilidades:{
              form.liderança?' Lider':''}{form.comunicativo?' Comunicativo':''}{
                form.colaborativo?' Colaborativo':''}{form.criativo?' Criativo':''}{
                  form.gestor?' Gestor':''}{form.decidido?' Decidido':''}
            </Text>

            <View style={s.al}>
              <Button
                title='voltar'
                color='#008080'
                onPress={()=>{settab(false)}} 
              ></Button>
              <View style={{paddingLeft:150}}>
                <Button
                    title='Export'
                    color='#008080'
                    onPress={printToFile} 
                ></Button>
              </View>
            </View>
          </View>
      </Modal>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
  },
  titul:{
    fontSize:26,
    textAlign:'center',
    color: '#008080',
  },
  al: {
    flexDirection:'row',
    paddingTop:70,
    paddingLeft:60,
  },
});
