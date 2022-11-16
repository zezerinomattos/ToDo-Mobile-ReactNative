import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Vou dar um nome para minha regra 
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    filter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: 70,
    },

    filterTextActived: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#EE6B26',
    }, 

    filterTextInative: {
        color: '#20295f',
        fontWeight: 'bold',
        fontSize: 18,
        opacity: 0.5
    }
});

export default styles;