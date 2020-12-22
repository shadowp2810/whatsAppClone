import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    title: {
        color: 'grey',
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
        //color: 'grey',
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around',
    },
    userName: {
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 16,

    },
    lastMessage: {
        color: 'grey',
        fontSize: 16,
        //width: '100%',
    },
    time: {
        color: 'grey',
        fontSize: 12,
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
    },
});

export default styles;