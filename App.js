import {ScrollView} from 'react-native';
import { lightMode, darkMode } from './Styles';
import React, {useState} from 'react';
import { Switch, Text, View, TextInput, Alert, Pressable } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import RadioForm from 'react-native-simple-radio-button';
import { useFonts } from 'expo-font';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [endresult, setEndresult] = useState(0);
  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ]

  function Calculate() {
       if (weight == "") {
          Alert.alert(
            "Attention",
              "Don't forget the weight!") 
      } 

      let result = 0;
      let litres = bottles * 0.33;
      let gram = litres * 8 * 4.5;
      let burning = weight / 10;
      let grams = gram - (burning * time);
  
      if (gender === 'male') {
        result = grams / (weight * 0.7)
      } else {
        result = grams / (weight * 0.6)
      }

      if (result < 0) {
        setEndresult(0);
       } else {
       setEndresult(result);
       }
  }

  function colorResultNumber() {
    if (endresult < 1) {
      return {
        color: 'green'
      }
    } else if (endresult < 2) {
      return {
        color: 'yellow'
      }
    } else if (endresult >= 2) {
      return {
        color: 'red'
      }
    }
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const mode = isEnabled ? lightMode : darkMode;
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [loaded] = useFonts({
    AcmeRegular: require('./fonts/Acme-Regular.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <ScrollView style={mode.StyleSheet}>
        <View
          style={mode.header}>
            <View>
              <Text
                style={mode.headerLabel}>Mode</Text>
                <Switch
                    value={isEnabled}
                    onValueChange={toggleSwitch}
                    thumbColor={mode.switchThumbColor}
                    trackColor={mode.switchTrackColor}/>
            </View>

            <Text
              style={mode.title}>
                Alcometer
            </Text>
        </View>

        <View
          style={mode.View}>
            <Text
              style={mode.label}>Weight</Text>
            <TextInput
                onChangeText={setWeight}
                style={mode.textInput}
                placeholder="Weight in kilos"
                keyboardType="numeric"
                />

            <Text
              style={mode.label}>
                Bottles</Text>
            <NumericInput 
                onChange={v => setBottles(v)}
                minValue={0}
                rounded
                leftButtonBackgroundColor={mode.leftButtonBackgroundColor}
                rightButtonBackgroundColor={mode.rightButtonBackgroundColor}
                inputStyle={mode.inputStyle}
                borderColor={mode.borderColor}
                textColor={mode.textColor}
                textInput={mode.textInput}
                />

            <Text
                style={mode.label}>
                  Hours</Text>
            <NumericInput 
                onChange={v => setTime(v)}
                minValue={0}
                rounded
                leftButtonBackgroundColor={mode.leftButtonBackgroundColor}
                rightButtonBackgroundColor={mode.rightButtonBackgroundColor}
                inputStyle={mode.inputStyle}
                borderColor={mode.borderColor}
                textColor={mode.textColor}
                />

            <Text
                style={mode.label}>
                Gender</Text>
            <RadioForm
                buttonSize = {10}
                radio_props={genders}
                initial={0}
                onPress={(value) => setGender(value)}
                labelColor={mode.labelColor}
                buttonColor={mode.buttonColor}
                selectedButtonColor={mode.selectedButtonColor}
                selectedLabelColor={mode.selectedLabelColor}
                labelStyle={mode.labelStyle}
                />

            <Pressable 
                style={mode.button} 
                onPress={()=> Calculate()}>
                <Text style={mode.text}>Calculate</Text>
            </Pressable>

            <Text
                style={mode.result}>Result:</Text>
            <Text
                style={[mode.resultNumber, colorResultNumber()]}>
                {endresult.toFixed(2)}</Text>
        </View>
    </ScrollView>
  );
};



