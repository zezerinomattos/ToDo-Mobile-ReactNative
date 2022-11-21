import React, { useState } from 'react';
import { TouchableOpacity, Image, DatePickerIOSBase } from 'react-native';

import { TextInputMask } from 'react-native-masked-text'

//MY IMPORTS
import styles from './styles';
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

export default function DateTimeInputIos({type}){
    const [dateTime, setDatetime] = useState(new Date);

    return(
        <TouchableOpacity style={styles.input}>
            <DatePickerIOSBase 
                date={dateTime}
                mode={type}
                minimumDate={new Date}
                onDateChange={setDatetime}
            />

            <Image source={type == 'date' ? iconCalendar : iconClock} style={styles.iconTextInput}/>

        </TouchableOpacity>
    )

}