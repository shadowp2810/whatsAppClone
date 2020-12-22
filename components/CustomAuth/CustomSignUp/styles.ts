import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5059ae',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    input: {
      flex: 1,
      fontSize: 17,
      fontWeight: 'bold',
      color: '#fff',
    },
    infoContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 370,
      bottom: 25,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 30,
      backgroundColor: '#5059ae',
    },
    itemStyle: {
      marginBottom: 10,
    },
    iconStyle: {
      color: '#fff',
      fontSize: 28,
      marginRight: 15
    },
    buttonStyle: {
      alignItems: 'center',
      backgroundColor: '#b44666',
      padding: 14,
      marginBottom: 10,
      borderRadius: 3,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: "#fff",
    },
    logoContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 600,
      bottom: 270,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    textStyle: {
      padding: 5,
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold'
    },
    countryStyle: {
      flex: 1,
      backgroundColor: '#5059ae',
      borderTopColor: '#211f',
      borderTopWidth: 1,
      padding: 12,
    },
    closeButtonStyle: {
      flex: 1,
      padding: 12,
      alignItems: 'center', 
      backgroundColor: '#b44666',
    }
  })

  export default styles;