import React, { useState } from 'react';
import { Pressable, TextInput, View, Text, StyleSheet } from 'react-native';

function ThreeSelection({ navigation }) {

    const [number, setNumber] = useState();
    const [result, setResult] = useState();

    const consul = () => {
        setResult('')
        if (parseInt(number) >= 100) {
            setResult(`El numero ${number} es mayor a 100`)
        }else if( parseInt(number) < 100 && parseInt(number) > 0){
            setResult(`El numero ${number} es menor a 100`)
        }else{
            setResult(`El numero ${number} es invalido`)
        }

    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={styles.title}>Mayorigual100: Ingresar un número y presentar el mensaje si es mayor o igual a 100
                Caso contrario presentar menor a 100.</Text>

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
                title="" onPress={() => navigation.navigate('Inicio')}>
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

export default ThreeSelection;