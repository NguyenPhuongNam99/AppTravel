import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'green'},
    imageBackground: {
      width: '100%',
      height: '100%',
    },
    topLevel: {
      width: '100%',
      height: '33%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    twoLevel: {
      width: '100%',
      height: '67%',
    },
    logoIcon: {
      width: 137,
      height: 220,
      zIndex: 2,
    },
    blockImageContainer: {width: '100%', height: '100%', zIndex: 99},
    blockContent: {
      width: '100%',
      height: '100%',
      paddingHorizontal: 16,
      paddingTop: 60,
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.5)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 99,
      borderRadius: 30,
      color: 'white',
      marginBottom: 30,
      paddingLeft: 16,
    },
    submit: {
      width: '100%',
      height: 40,
      backgroundColor: '#FF5F24',
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    colorSubmit: {color: '#FFFFFF'},
    askQuestion: {position: 'absolute', bottom: 20, alignSelf: 'center'},
    loginText: {color: '#141ED2'},
    imageOpacity: {width: '100%', height: '100%', position: 'absolute'},
  });

  export default styles;