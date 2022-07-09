import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Line from './src/func/liner';

export default function App() {

  const [age, setage] = useState();
  const [name, setName] = useState();
  const [result, setResult] = useState();

  const consul = () => {
    setResult('')
    if (age >= 18) {
      setResult('El usuario ' + name + ' es mayor de edad')
    } else if (age > 0 && age < 18) {
      setResult('El usuario ' + name + ' es menor de edad')
    } else {
      setResult('El usuario ' + name + ' ingreso una edad invalida')
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>App para verificar si el usuario es mayor o menor de edad.</Text>
      <Line />

      <TextInput
        style={styles.textInputs}
        placeholder='Ingrese su nombre'
        keyboardType='default'
        onChangeText={setName}
        value={name}
      />
      <Line />

      <TextInput
        style={styles.textInputs}
        placeholder='Ingrese su edad'
        keyboardType='numeric'
        onChangeText={setage}
        value={age}
      />
      <Line

      />
      <Button
        title='Consultar'

        onPress={consul} />
      <Text style={styles.result} onPress={consul}>{result}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textTransform: 'uppercase',
  },
  textInputs: {
    padding: 15
  },
  result: {
    color: 'red',
    padding: 15,
    fontSize: 30
  },
});
