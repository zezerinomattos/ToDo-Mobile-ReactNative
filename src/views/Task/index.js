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
    Alert,
    ActivityIndicator } 
from 'react-native';

import * as Network from 'expo-network';
import { format, isPast } from 'date-fns';
import { TextInputMask } from 'react-native-masked-text';

// MY IMPORTS
import styles from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DateTimeInput from '../../components/DateTimeInput';
import api from '../../services/api';

// ICONES
import typeIcons from '../../utils/typeIcons';
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

export default function Task({navigation}){
    
    const [id, setId] = useState(false);
    const [done, setDone] = useState(false);
    const [type, setTaype] = useState();
    const [title, setTitle] = useState();
    const [description, setDescripition] = useState();
    const [macaddress, setMacaddress] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();

    const [load, setLoad] = useState(true);

    async function SaveTask(){
        //alert(`${date}T${hour}:00.000`);
        if(isPast(new Date(date))){
            return Alert.alert('Voce não pode escolher uma data passada!');
        }

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

        //Vou fazer uma condição para verificar se é novo ou editar 
        if(id){
            //Chamando a api
            await api.put(`/task/${id}`, {
                macaddress,
                type,
                title,
                description,
                done,
                when: `${date}T${hour}:00.000`
                              
            }).then(() => {
                navigation.navigate('Home');
            });

        }else{
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
        
    }

    async function LoadTask(){
        await api.get(`/task/${id}`)
            .then(response => {
                setLoad(true)
                setDone(response.data.done);
                setTaype(response.data.type);
                setTitle(response.data.title);
                setDescripition(response.data.description);
                setHour(format(new Date(response.data.when), 'HH:00'));
                setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
            });
            
    }

    function Back(){
        navigation.navigate('Home');
    }

    async function getMacAdress(){
        await Network.getIpAddressAsync().then(mac => {           
            setMacaddress(mac);
            setLoad(false);
           }); 
    }

    useEffect(() => {
        getMacAdress();
        
        if(navigation.state.params){
            setId(navigation.state.params.idTask);
            LoadTask().then(() => {
                setLoad(false);
            })           
        }

    });

    return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={true} onPress={Back}/>
            {
                load ?
                    <ActivityIndicator color={'#EE6B26'} size={50} style={{marginTop: 150}}/>
                :
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

                        {/* <DateTimeInput type={'date'} save={setDate} datee={date}/>
                        <DateTimeInput type={'hour'} save={setHour} hour={hour}/> */}
                        
                        <TouchableOpacity >
                            {
                                id ? 
                                    <>
                                        <TextInputMask style={styles.inputDateHour} placeholder='yyyy-MM-dd'
                                            type={'datetime'}
                                            options={{
                                                format: 'yyyy-MM-dd'
                                            }}
                                            value={date}
                                            onChangeText={e => setDate(e)}                       
                                        />
                                        <Image source={iconCalendar} style={styles.iconTextInputDate}/>

                                        <TextInputMask style={styles.inputDateHour} placeholder='HH:mm'
                                            type={'datetime'}
                                            options={{
                                                format: 'HH:mm'
                                            }}
                                            value={hour}
                                            onChangeText={e => setHour(e)}
                                        />                   
                                        <Image source={iconClock} style={styles.iconTextInputHour}/>
                                    </>                  
                                :
                                    <>
                                        <TextInputMask style={styles.inputDateHour} placeholder='yyyy-MM-dd'
                                            type={'datetime'}
                                            options={{
                                                format: 'yyyy-MM-dd'
                                            }}
                                            value={date}
                                            onChangeText={e => setDate(e)}                       
                                        />
                                        <Image source={iconCalendar} style={styles.iconTextInputDate}/>
        
                                        <TextInputMask style={styles.inputDateHour} placeholder='HH:mm'
                                            type={'datetime'}
                                            options={{
                                                format: 'HH:mm'
                                            }}
                                            value={hour}
                                            onChangeText={e => setHour(e)}
                                        />                   
                                        <Image source={iconClock} style={styles.iconTextInputHour}/>
                                    </> 
                            }
                        </TouchableOpacity>               

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
            }

            <Footer icon={'save'} onPress={SaveTask}/>

        </KeyboardAvoidingView>
    );
}
