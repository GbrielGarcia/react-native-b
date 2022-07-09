import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Menu, MenuItem, MenuDivider} from 'react-native-material-menu';


export default function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  const s = () => {
    setResult('')
    setResult(parseFloat(num1) + parseFloat(num2));

  }
  const m = () => {
    setResult('')
    setResult(parseFloat(num1) * parseFloat(num2));

  }
  const r = () => {
    setResult('')
    setResult(parseFloat(num1) - parseFloat(num2));

  }
  const d = () => {
    setResult('')
    setResult(parseFloat(num1) / parseFloat(num2));

  }
  // menu
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  // menu

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInputs}
        placeholder='Ingrese un numero'
        keyboardType='numeric'
        onChangeText={setNum1}
        value={num1}
      />
      <TextInput style={styles.textInputs}
        placeholder='Ingrese un numero'
        keyboardType='numeric'
        onChangeText={setNum2}
        value={num2}
      />
<Text style={styles.result}>{result}</Text>

<Menu
        visible={visible}
        anchor={<Text onPress={showMenu}>Menu Opciones</Text>}
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={s}>Sumar</MenuItem>
        <MenuDivider />
        <MenuItem onPress={r}>Resta</MenuItem>
        <MenuDivider />
        <MenuItem onPress={m}>Multiplicar</MenuItem>
        <MenuDivider />
        <MenuItem onPress={d}>Division</MenuItem>
      </Menu>


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
  textInputs: {
    padding: 15
  },
  result: {
    color: 'red',
    padding: 15,
    fontSize: 30
  },
  opcionRow:{
    flex: 1,
    flexDirection: 'row',
  }
});
