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

// ICONES
import typeIcons from '../../utils/typeIcons';

export default function Task(){
    return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={true}/>
            
            <ScrollView style={{width: '100%'}}>

                <ScrollView horizontal={true}>
                    {
                        typeIcons.map(icon => (
                            <TouchableOpacity>
                                <Image source={icon} />
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>

            </ScrollView>

        </KeyboardAvoidingView>
    );
}
