import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import {Checkbox} from 'react-native-paper'
import IStep from "../Step";

export default function Habilidades({ nextStep, backStep }: IStep){
    const [check, setchek] = useState(false);
    const [check1, setchek1] = useState(false);
    const [check2, setchek2] = useState(false);
    const [check3, setchek3] = useState(false);
    const [check4, setchek4] = useState(false);
    const [check5, setchek5] = useState(false);
    

    return (

        <View>
            <Text style={{textAlign:'center', paddingTop:30, fontSize:20,}}>Habilidades</Text>
            <View>
                <Checkbox.Item label="Liderança" status={check?'checked':'unchecked'} onPress={()=>{setchek(!check)}} />
                <Checkbox.Item label="Comunicativo" status={check1?'checked':'unchecked'} onPress={()=>{setchek1(!check1)}} />
                <Checkbox.Item label="Colaborativo" status={check2?'checked':'unchecked'} onPress={()=>{setchek2(!check2)}} />
                <Checkbox.Item label="Criativo" status={check3?'checked':'unchecked'} onPress={()=>{setchek3(!check3)}} />
                <Checkbox.Item label="Gestor" status={check4?'checked':'unchecked'} onPress={()=>{setchek4(!check4)}} />
                <Checkbox.Item label="Decisivo" status={check5?'checked':'unchecked'} onPress={()=>{setchek5(!check5)}} />
            </View>
            <View style={ {
                flexDirection: 'row',
                paddingTop:70,
                paddingLeft:80,
                bottom:50,
            }}>
                <Button
                    title='back'
                    color='#008080'
                    onPress={()=>{backStep()}} 
                ></Button>
                <View style={{paddingLeft:150}}>
                    <Button
                        title='Criar'
                        color='#008080'
                        onPress={()=>{nextStep({'liderança':check,'comunicativo':check1,
                            'colaborativo':check2,'criativo':check3,'gestor':check4,
                            'decidido':check5})}} 
                    ></Button>
                </View>
            </View>
        </View>

    );
    
    
}






    

    