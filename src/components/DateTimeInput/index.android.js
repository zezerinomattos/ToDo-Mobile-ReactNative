import React, { useState} from 'react';
import { TouchableOpacity, Image, TextInput, Text, KeyboardAvoidingView } from 'react-native';

import { TextInputMask } from 'react-native-masked-text'

// MY IMPORTS
import styles from './styles';
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';


export default function DateTimeInputAndroid({type}){
    const [dateTime, setDatetime] = useState();
    return(
        <TouchableOpacity style={styles.continer}>
            {
                type === 'date' ?
                <>
                    <TextInputMask style={styles.input} placeholder='DD-MM-YYYY'
                        type={'datetime'}
                        options={{
                            format: 'DD-MM-YYYY'
                        }}
                        value={dateTime}
                        onChangeText={e => setDatetime(e)}
                    />
                    <Image source={iconCalendar} style={styles.iconTextInput}/>
                </>
                :
                <>
                    <TextInputMask style={styles.input} placeholder='HH:mm'
                        type={'datetime'}
                        options={{
                            format: 'HH:mm'
                        }}
                        value={dateTime}
                        onChangeText={e => setDatetime(e)}
                    /> 
                    <Image source={iconClock} style={styles.iconTextInput}/>
                </>

            }
            
        </TouchableOpacity>
    )
}


// export default function DateTimeInputAndroid({type}){

//     const [dateTime, setDatetime] = useState();

//     async function selectDataOrHour(){
//         if(type == 'date'){
//             const {action, year, month, day} = await DatePickerAndroid.open({
//                 mode: 'calendar'
//             });

//             if(action == DatePickerAndroid.dateSetAction){
//                 setDatetime(`${day} - ${month} - ${year}`);
//             }

//         }else{
//             const {action, hour, minuto} = await TimePickerAndroid.open({
//                 is24Hour: true
//             });
//             if(action !== TimePickerAndroid.dismissedAction){
//                 setDatetime(`${hour}:${minuto}`);
//             }
//         }      
//     }

//     return(
//         <KeyboardAvoidingView behavior='padding'>
//             <TouchableOpacity onPress={selectDataOrHour} >

//                 {/* <TextInput style={styles.input} value={datetime} editable={false}
//                             placeholder={type == 'date' ? 'Clique aqui para definir a Data...' 
//                             : 'Clique aqui para definir a Hora...'} />

//                 <Image source={type == 'date' ? iconCalendar : iconClock} style={styles.iconTextInput}/> */}
//             </TouchableOpacity>

//         </KeyboardAvoidingView>
//     )
    
// };
