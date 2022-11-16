import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import add from '../../assets/addGrande.png';
import save from '../../assets/saveGrande.png';

export default function Footer({icon}){
    return(
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.button}>
                <Image source={icon == 'add' ? add : save} style={styles.image}/>
            </TouchableOpacity>

            <Text style={styles.text} >Organizando sua vida</Text>
        </View>
    )
}