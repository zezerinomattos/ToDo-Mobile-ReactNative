import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        width: '90%',
        height: 90,
        borderRadius: 10,
        justifyContent: 'space-around',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        padding: 10
    },

    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    typeActive: {
        width: 50,
        height:50,
        marginRight: 10
    },

    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },

    cardRight: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 5
    },

    cardDate: {
        color: '#EE6B26',
        fontWeight: 'bold',
        fontSize: 16
    },

    cardTime: {
        color: '#707070',
        fontSize: 16
    },

    done: {
        opacity: 0.5
    },

    
})

export default styles;