import React, { useState } from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity, 
    ScrollView, 
    Image, 
    TextInput, 
    KeyboardAvoidingView, 
    Switch } from 'react-native';

// MY IMPORTS
import styles from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DateTimeInput from '../../components/DateTimeInput';

// ICONES
import typeIcons from '../../utils/typeIcons';

export default function Task({navigation}){

    const [done, setDone] = useState(false);
    const [type, setTaype] = useState();

    function Back(){
        navigation.navigate('Home');
    }

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
                <TextInput style={styles.input} maxLength={30} placeholder='Lembre-me de fazer...' />

                <Text style={styles.label}>Detalhes</Text>
                <TextInput style={styles.inputArea} maxLength={200} multiline={true} placeholder='Detalhes da atividade que eu tenho que lembrar...' />

                <DateTimeInput type={'date'}/>
                <DateTimeInput type={'hour'}/>

                <View style={styles.inLine}>
                    <View style={styles.inputInLine}>
                        
                        <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#00761B' : '#EE6B26'}/>

                        <Text style={styles.switchLabel}>Concluído</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.removeLabel}>EXCLUÍR</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <Footer icon={'save'} />

        </KeyboardAvoidingView>
    );
}
