import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        padding: 10,
        width: '95%',
        borderBottomWidth: 1,
        borderBottomColor: '#EE6B26',
        marginHorizontal: 10,
        marginVertical: 20
    },

    iconTextInput: {
        position: 'absolute',
        left: '95%',
        top: 35,
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginHorizontal: -15
    },
});

export default styles;