import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: '#20295F',
        borderTopWidth: 5,
        borderColor: '#EE6B26',
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        bottom: 0

    },

    button: {
        position: 'relative',
        top: -30,
    },

    image: {
        width: 70,
        height:70,
    },

    text: {
        position: 'relative',
        top: -30,
        color: '#FFF',
        fontSize: 15,
        marginTop: 15
        
    }
});

export default styles;