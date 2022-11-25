import React, { useState, useEffect } from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    ScrollView, 
    Image, 
    TextInput, 
    KeyboardAvoidingView, 
    Switch, 
    Alert} 
from 'react-native';

import * as Network from 'expo-network';

// MY IMPORTS
import styles from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DateTimeInput from '../../components/DateTimeInput';
import api from '../../services/api';

// ICONES
import typeIcons from '../../utils/typeIcons';

export default function Task({navigation, idTask}){

    const [id, setId] = useState(false);
    const [done, setDone] = useState(false);
    const [type, setTaype] = useState();
    const [title, setTitle] = useState();
    const [description, setDescripition] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState();

    async function New(){
        //alert(`${date}T${hour}:00.000`);

        if(!type){
            return Alert.alert('Escolha um tipo de tarefa!');
        }
        if(!title){
            return Alert.alert('Defina o nome da tarefa!');
        }
        if(!description){
            return Alert.alert('Defina a descrição da tarefa!');
        }
        if(!date){
            return Alert.alert('Defina uma data para a tarefa!');
        }
        if(!hour){
            return Alert.alert('Defina um horario para a tarefa!');
        }

        //Chamando a api
        await api.post('/task', {
            macaddress,
            type,
            title,
            description,
            when: `${date}T${hour}:00.000`
            
        }).then(() => {
            navigation.navigate('Home');
        });
        
    }

    function Back(){
        navigation.navigate('Home');
    }

    async function getMacAdress(){
        await Network.getIpAddressAsync().then(mac => {           
            setMacaddress(mac)
           }); 
    }

    useEffect(() => {
        if(navigation.state.params){
            setId(navigation.state.params.idTask);
        }

        getMacAdress();
    });


    return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={true} onPress={Back}/>
            
            <ScrollView style={{width: '100%'}}>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:10}}>
                    {
                        typeIcons.map((icon, index) => (
                            icon != null &&
                                <TouchableOpacity onPress={() => setTaype(index)}>
                                    <Image source={icon} style={[styles.imageIcon, type && type != index && styles.typeIconInative]}/>
                                </TouchableOpacity>
                        ))
                    }
                </ScrollView>

                <Text style={styles.label}>Título</Text>
                <TextInput style={styles.input} 
                    maxLength={30} 
                    placeholder='Lembre-me de fazer...' 
                    onChangeText={(text) => setTitle(text)} 
                    value={title}
                />

                <Text style={styles.label}>Detalhes</Text>
                <TextInput style={styles.inputArea} 
                    maxLength={200} 
                    multiline={true} 
                    placeholder='Detalhes da atividade que eu tenho que lembrar...' 
                    onChangeText={(text) => setDescripition(text)}
                    value={description} 
                />

                <DateTimeInput type={'date'} save={setDate}/>
                <DateTimeInput type={'hour'} save={setHour}/>
                {
                    id &&
                        <View style={styles.inLine}>
                            <View style={styles.inputInLine}>
                                
                                <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#00761B' : '#EE6B26'}/>

                                <Text style={styles.switchLabel}>Concluído</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.removeLabel}>EXCLUÍR</Text>
                            </TouchableOpacity>
                        </View>
                }

            </ScrollView>

            <Footer icon={'save'} onPress={New}/>

        </KeyboardAvoidingView>
    );
}
