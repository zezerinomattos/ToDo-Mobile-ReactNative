import React from 'react';
import { Text, View } from 'react-native';

//MY IMPORTS
import styles from './styles';
import Header from '../../components/Header';

export default function Home(){
    return(
        <View style={styles.container}>
            <Header showNotification={true} showBack={false}/>
        </View>
    );
}