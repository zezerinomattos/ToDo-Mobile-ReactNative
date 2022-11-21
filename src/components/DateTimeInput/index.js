import React, { useState } from 'react';
import { Platform } from 'react-native';

import DateTimeInputIOS from './index.ios';
import DateTimeInputAndroid from './index.android';

export default function Index(){
    return(
        Platform.OS === 'android' ? <DateTimeInputAndroid /> : <DateTimeInputIOS />
    )
}