import React from "react";
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'
import IStep from "../Step";
    export default function Pessoal({ nextStep, backStep }: IStep){
        const [text, setText] = React.useState("");
        const [text1, setText1] = React.useState("");
        const [text2, setText2] = React.useState("");
        const [text3, setText3] = React.useState("");
        const [text4, setText4] = React.useState("");
        
        return(
            <View style={{paddingTop:20}}>
                <Text style={{paddingLeft:5}}>Idade:</Text>
                <TextInput
                style={styles.input}
                onChangeText={ t => {setText(t)}}
                placeholder="Ex:18,22"
                />
                <Text style={{paddingLeft:5}}>Sexo:</Text>
                <TextInput
                style={styles.input}
                onChangeText={ t => {setText1(t)} }
                placeholder="M ou H"
                />
                <Text style={{paddingLeft:5}}>Escolaridade:</Text>
                <TextInput
                style={styles.input}
                onChangeText={t => {setText2(t)}}
                placeholder="Ex:Fundamental, Médio, Faculdade.."
                />
                <Text style={{paddingLeft:5}}>Telefone:</Text>
                <TextInput
                style={styles.input}
                onChangeText={ t => {setText3(t)}}
                placeholder="(xx)xxxxx-xxxx"
                />
                <Text style={{paddingLeft:5}}>E-mail:</Text>
                <TextInput
                style={styles.input}
                onChangeText={ t => {setText4(t)}}
                placeholder="exampe@anymail.com"
                />
                <View style={styles.al}>
                    <Button
                        title='back'
                        color='#008080'
                        onPress={()=>{backStep()}} 
                    ></Button>
                    <View style={{paddingLeft:150}}>
                        <Button
                            title='next'
                            color='#008080'
                            onPress={()=>
                                {nextStep({'idade':text,'sexo':text1,'escolaridade':text2,
                                    'telefone':text3,'email':text4})}} 
                        ></Button>
                    </View>
                </View>
            </View>

        );
    }
    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 5,
          borderWidth: 1,
          padding: 10,
        },
        al: {
            flexDirection: 'row',
            paddingTop:70,
            paddingLeft:80,
            bottom:50,
          },
    });