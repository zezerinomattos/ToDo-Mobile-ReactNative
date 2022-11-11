import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: '#20295F',
        borderBottomWidth: 5,
        borderColor: '#EE6B26',
        alignItems: 'center',
        justifyContent: 'center'
    },

    // QRCODE
    leftIcon: {
        position: 'absolute',
        left: 20
    },

    leftIconImage: {
        width: 30,
        height: 30
    },

    // LOGO
    logo: {
        width: 100,
        height: 30
    },

    //NOTIFITION
    notification: {
        position: 'absolute',
        right: 20
    },
    notificationImage: {
        width: 20,
        height: 25
    },
    circle: {
        width: 20,
        borderRadius: 50,
        backgroundColor: '#FFF',
        alignItems: 'center',
        position: 'absolute',
        left: 13,
        bottom: 13
    },
    notificationText: {
        color: '#EE6B26',
        fontWeight: 'bold'
    }
});

export default styles;