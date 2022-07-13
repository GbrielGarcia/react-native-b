import React, { useState } from 'react';
import { Pressable, TextInput, View, Text, StyleSheet } from 'react-native';

function TwoProcess({ navigation }) {

    const [numberOne, setNumberOne] = useState();
    const [numberTwo, setNumberTwo] = useState();
    const [result, setResult] = useState();

    const consul = () => {
        setResult('')
        if (parseInt(numberOne) >= 0 && parseInt(numberTwo) >= 0) {
            setResult(`(${numberOne} + ${numberOne}) * 2 = ${numberOne + numberTwo * 2}`)
            console.log(`(${numberOne} + ${numberOne}) * 2 = ${(numberOne + numberTwo) * 2}`)
        }

    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={styles.title}>Se requiere ingresar dos números por teclado aplicar a la fórmula (x+y)*2, presentar
                el resultado por pantalla.</Text>

            <TextInput
                style={styles.textInputs}
                placeholder='Ingrese un numero'
                keyboardType='numeric'
                onChangeText={setNumberOne}
                value={numberOne}
            />

            <TextInput
                style={styles.textInputs}
                placeholder='Ingrese un numero'
                keyboardType='numeric'
                onChangeText={setNumberTwo}
                value={numberTwo}
            />

            <Text style={styles.result} onPress={consul}>{result}</Text>


            <Pressable
                style={[styles.button, { backgroundColor: 'blue' }]}
                title="" onPress={consul}>
                <Text style={styles.text} >  run </Text>
            </Pressable>

            <Pressable
                style={[styles.button, { backgroundColor: 'red' }]}
                title="VOLVER" onPress={() => navigation.navigate('Inicio')}>
                <Text style={styles.text} >inicio</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({

    title: {
        textTransform: 'uppercase',
        color: 'black',
        margin: 10,
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        margin: 10,
    },
    textInputs: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textTransform: 'uppercase',
    },

});

export default TwoProcess;