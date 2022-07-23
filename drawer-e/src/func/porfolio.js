import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

function Portafolio() {

    const [num1, setNum1] = useState();
    const [result, setResult] = useState();
    const mC = () => {
        setResult('')
        setResult(parseFloat(num1) * 100);
    }
    const cM = () => {
        setResult('')
        setResult(parseFloat(num1) / 100);
    }

    // menu
    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);
    // menu

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.titleInit}>Conversiones: Convertir unidad de medida de almacenamiento.</Text>

            <TextInput style={styles.textInputs}
                placeholder='Ingrese un numero'
                keyboardType='numeric'
                onChangeText={setNum1}
                value={num1}
            />
            <Text style={styles.result}>{result}</Text>
            <Menu
                visible={visible}
                anchor={<Text onPress={showMenu}>Menu Opciones</Text>}
                onRequestClose={hideMenu}
            >
                <MenuItem onPress={mC}>Metro a Centimetro</MenuItem>
                <MenuDivider />
                <MenuItem onPress={cM}>Centimetro a Metro</MenuItem>
            </Menu>
            <StatusBar style="auto" />

        </View>
    );
}

const styles = StyleSheet.create({
    titleInit: {
        backgroundColor: 'red',
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase',
        margin: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
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
    opcionRow: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default Portafolio;