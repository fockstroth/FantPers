import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, Picker, Button} from 'react-native'
import IStep from "../Step";

    export default function Profissional({ nextStep, backStep }: IStep){
        const [selectedValue, setSelectedValue] = useState("Setor A");
        const [selectedValue1, setSelectedValue1] = useState("Diretor");
        const [selectedValue2, setSelectedValue2] = useState("Gerente");
        return (
            <View>  
                <Text style={{textAlign:'center', paddingTop:40, fontSize:16,}}>Setor da empresa:</Text>
                <View style={{alignItems:'center',paddingTop:10}}>
                    <View style={styles.container}>
                        <Picker 
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}   >
                            <Picker.Item label="Setor A" value="Setor A" />
                            <Picker.Item label="Setor B" value="Setor B" />
                            <Picker.Item label="Setor C" value="Setor C" />
                            <Picker.Item label="Setor D" value="Setor D" />
                        </Picker>
                    </View>
                </View>
                <Text style={{textAlign:'center', paddingTop:30, fontSize:16,}}>Cargo:</Text>
                <View style={{alignItems:'center',paddingTop:10}}>
                    <View style={styles.container}>
                        <Picker 
                            selectedValue={selectedValue1}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}   >
                            <Picker.Item label="Diretor" value="Diretor" />
                            <Picker.Item label="SubGerente" value="SubGerente" />
                            <Picker.Item label="Engenheiro" value="Engenheiro" />
                            <Picker.Item label="Fiscal" value="Fiscal" />
                            <Picker.Item label="Programador" value="Programador" />
                            <Picker.Item label="Gestor de recursos" value="Gestor" />
                        </Picker>
                    </View>
                </View>
                <Text style={{textAlign:'center', paddingTop:30, fontSize:16,}}>Encarregado:</Text>
                <View style={{alignItems:'center',paddingTop:10, paddingBottom:30}}>
                    <View style={styles.container}>
                        <Picker 
                            selectedValue={selectedValue2}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}   >
                            <Picker.Item label="Gerente" value="Gerente" />
                            <Picker.Item label="Sub-Gerente" value="Sub-Gerente" />
                            <Picker.Item label="Diretor" value="Diretor" />
                            <Picker.Item label="CEO" value="CEO" />
                            <Picker.Item label="Dono" value="Dono" />
                        </Picker>
                    </View>
                </View>
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
                            onPress={()=>{nextStep({'setor':selectedValue, 'cargo':selectedValue1,
                            'superior':selectedValue2})}} 
                        ></Button>
                    </View>
                </View>
            </View>

        );
    }
    const styles = StyleSheet.create({
        container: {
            height: 45, 
            width: 300,
            borderWidth: 1, 
            borderColor:'grey',
        },
        al: {
            flexDirection: 'row',
            paddingTop:70,
            paddingLeft:80,
            bottom:50,
          },
    });