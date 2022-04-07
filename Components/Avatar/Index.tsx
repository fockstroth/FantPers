import React from "react";
import {View ,Text, StyleSheet, TextInput, TouchableOpacity, Image, Button } from "react-native";
import IStep from "../Step";

  export default function Avatar({ nextStep }: IStep){
    const [text, setText] = React.useState();
    const [Foto, setFoto] = React.useState();
    const [sel, Setsel] = React.useState(4);
    const [sel1, Setsel1] = React.useState(0);
    const [sel2, Setsel2] = React.useState(0);

    return (
      <View style={{paddingTop:20}}>
        <Text style={{paddingLeft:5}}>Nome de Persona:</Text>
        <TextInput
            style={styles.input}
            onChangeText={(texto) => {setText(texto)}}
            placeholder="Example:caio,roberto"
        />
        <Text style={{textAlign:'center',paddingTop:10,fontSize:18}}
          >Escolha seu Avatar:</Text>
        <View style={styles.al}>
          <TouchableOpacity style={styles.avt} onPress={ ()=> 
            {Setsel(4), Setsel1(0), Setsel2(0), setFoto(require('../../img/menina1.jpg'))} }>
            <Image style={{
                padding: 20,
                borderRadius: 20,
                width: 150,
                height: 140,
                borderColor:'#800080',
                borderWidth:sel,
              }
            } source={ require('../../img/menina1.jpg') }/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.avt} onPress={ ()=> 
            {Setsel(0), Setsel1(4), Setsel2(0), setFoto(require('../../img/menina2.jpg'))} }>
            <Image style={{
                padding: 20,
                borderRadius: 20,
                width: 150,
                height: 140,
                borderColor:'#800080',
                borderWidth:sel1,
              }
          } source={ require('../../img/menina2.jpg') }/>
          </TouchableOpacity>
        </View>
          <TouchableOpacity style={{paddingLeft:130, paddingTop:20}} onPress={ ()=> 
            {Setsel(0), Setsel1(0), Setsel2(4), setFoto(require('../../img/menino1.jpg'))} }>
            <Image style={{
              padding: 20,
              borderRadius: 20,
              width: 150,
              height: 140,
              borderColor:'#800080',
              borderWidth:sel2,
              }
            } source={ require('../../img/menino1.jpg') }/>
          </TouchableOpacity>
          <View style={styles.ala}>
            <View style={{paddingLeft:100}}>
              <Button
                title='next'
                color='#008080'
                onPress={()=>{nextStep({'nome':text, 'foto':Foto})}} 
              ></Button>
            </View>
          </View>  
      </View>
    );
  };

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    
  },
  al: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:10,
  },
  avt:{
    paddingLeft:38,
  },
  ala: {
    flexDirection: 'row',
    paddingTop:70,
    paddingLeft:80,
    bottom:50,
  },
});
