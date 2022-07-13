import React, { useState } from 'react';
import { Pressable, TextInput, View, Text, StyleSheet } from 'react-native';

export default function UnoProcess({ navigation }) {

    const [number, setNumber] = useState();
    const [result, setResult] = useState();

    const consul = () => {
        setResult('')
        if (parseInt(number) >= 0) {
            setResult(`El numero ${number} elevado al cuadrado es ${number * number}`)
        } else {
            setResult(`El numero ${number} no es valido`)
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={styles.title}>Se requiere ingresar un número por teclado y presentar el resultado del mismo
                elevado al cuadrado</Text>

            <TextInput
                style={styles.textInputs}
                placeholder='Ingrese un numero'
                keyboardType='numeric'
                onChangeText={setNumber}
                value={number}
            />

            <Text style={styles.result} onPress={consul}>{result}</Text>


            <Pressable
                style={[styles.button, { backgroundColor: 'blue' }]}
                title="" onPress={consul}>
                <Text style={styles.text} >  run </Text>
            </Pressable>


            <Pressable
                style={[styles.button, { backgroundColor: 'red' }]}
                title="" onPress={() => navigation.navigate('Home')}>
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

