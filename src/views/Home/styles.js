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
    },

    content: {
        width: '100%',
        marginTop: 30
    },

    title: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#20295f',
        alignItems: 'center'
    },

    titleText: {
        color: '#20295f',
        fontSize: 18,
        position: 'relative',
        top: 11,
        backgroundColor: '#fff',
        paddingHorizontal: 10
    }
});

export default styles;