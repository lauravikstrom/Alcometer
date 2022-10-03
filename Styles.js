import {StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';

export const lightMode = StyleSheet.create({
    

    StyleSheet: {
        backgroundColor: '#ffb3cb',
        paddingTop: 20
    }, 

    alert: {
        color: 'red'
    },

    switchThumbColor: '#4d0018',
    switchTrackColor: {
        true: '#800028'
    },
    
    header: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 15,
        paddingBottom: 20,
        borderBottomColor: '#800028',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    headerLabel: {
        marginTop: 25,
        fontSize: 16,
        fontFamily: 'AcmeRegular'
    },

    title: {
        fontSize: 43,
        marginTop: 20,
        color: '#4d0018',
        fontFamily: 'AcmeRegular',
        letterSpacing: 1.5,
    },

    View: {
        alignItems: 'center',
    },

    textInput: {
        backgroundColor: '#ff99b9',
        textAlign: 'center',
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: 'black',
        elevation: 3,
        borderRadius: 10,
        fontFamily: 'AcmeRegular',
        fontSize: 18
    },

    label: {
        marginTop: 25,
        marginBottom: 15,
        fontSize: 18,
        fontFamily: 'AcmeRegular'
    },

    leftButtonBackgroundColor: '#ff99b9',
    rightButtonBackgroundColor: '#ff99b9',
    inputStyle: {
        fontFamily: 'AcmeRegular',
    },
    borderColor: 'black',
    textColor: 'black',
    
    buttonColor: '#660020',
    selectedButtonColor: '#660020',
    labelStyle: {
        fontFamily: 'AcmeRegular'
    },

    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#ff99b9',
        borderRadius: 10,
        marginTop: 20,

      },
       text: {
        fontSize: 21,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'black',
        fontFamily: 'AcmeRegular'
      }, 
      

      result: {
        marginTop: 25,
        fontSize: 21,
        lineHeight: 21,
        fontFamily: 'AcmeRegular'
      },

      resultNumber: {
        marginTop: 15,
        marginBottom: 12,
        fontFamily: 'AcmeRegular',
        fontSize: 18,
        letterSpacing: 1.5,
      }

});


export const darkMode = StyleSheet.create({
    StyleSheet: {
        ...lightMode.StyleSheet,
        backgroundColor: '#33000f',
    }, 

    switchThumbColor: '#ff6696',
    switchTrackColor: {
        false: '#ffb3cb'
    },

    header: {
        ...lightMode.header,
        borderBottomColor: "pink",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    headerLabel: {
        ...lightMode.headerLabel,
        color: '#ffb3cb',
    },

    title: {
        ...lightMode.title,
        color: '#ffe6ee'
    },

    View: {
        ...lightMode.View,
        color: '#ffb3cb'
    },

    textInput: {
        ...lightMode.textInput,
        backgroundColor: '#ffb3cb'
    },

    label: {
        ...lightMode.label,
        color: '#ffb3cb',
    },

    leftButtonBackgroundColor: '#ffb3cb',
    rightButtonBackgroundColor: '#ffb3cb',
    borderColor: '#ffe6ee',
    textColor: '#ffe6ee',
    
    labelColor: '#ffe6ee',
    buttonColor: '#ffe6ee',
    selectedButtonColor: '#ffe6ee',
    selectedLabelColor: '#ffe6ee',
    labelStyle: {
        ...lightMode.labelStyle
    },

    button: {
        ...lightMode.button,
        backgroundColor: '#ffb3cb',
      },
    text: {
        ...lightMode.text,
        color: 'black'
      },

    result: {
        ...lightMode.result,
        color: '#ffe6ee'
    },
    resultNumber: {
        ...lightMode.resultNumber,
        color: '#ffe6ee'
    }

});