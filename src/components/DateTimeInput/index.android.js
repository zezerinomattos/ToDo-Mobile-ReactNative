import React, { useState, useEffect} from 'react';
import { TouchableOpacity, Image, Alert} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';
import { format } from 'date-fns';

// MY IMPORTS
import styles from './styles';
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';


export default function DateTimeInputAndroid({type, save, datee, hour}){
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [carregaHour, setCarregaHour] = useState();

    useEffect(() => {

        if(datee){
            if(datee){
                setDate(format(new Date(datee), 'yyyy-MM-dd'));  
                save(date);        
            } 
           
            if(hour){
                setCarregaHour(format(new Date(hour), 'HH:00'));
                setTime(toString(carregaHour));
                save(time)
            }
        }else{

            if(type == 'date'){
                save(date);
                
            }else{
                save(time)
            }
        }

        

    });

    return(
        <TouchableOpacity style={styles.continer} >
            {
                type === 'date' ?
                <>
                    <TextInputMask style={styles.input} placeholder='YYYY-MM-DD'
                        type={'datetime'}
                        options={{
                            format: 'YYYY-MM-DD'
                        }}
                        value={date}
                        onChangeText={e => setDate(e)}                       
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
                        value={time}
                        onChangeText={e => setTime(e)}
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
