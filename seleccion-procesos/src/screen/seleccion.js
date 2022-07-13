import * as React from 'react';

import { Pressable, View, Text, StyleSheet,TouchableWithoutFeedback } from 'react-native';

function Selection({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                     <TouchableWithoutFeedback
                style={styles.button}
                title="Seleccion"
                onPress={() => navigation.navigate('Uno Seleccion')}>
                <View style={styles.button}>
                    <Text style={styles.text}>uno</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                style={styles.button}
                title="Seleccion"
                onPress={() => navigation.navigate('Dos Seleccion')}>
                <View style={styles.button}>
                    <Text style={styles.text}>dos</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                style={styles.button}
                title="Seleccion"
                onPress={() => navigation.navigate('Tres Seleccion')}>
                <View style={styles.button}>
                    <Text style={styles.text}>tres</Text>
                </View>
            </TouchableWithoutFeedback>
            <Pressable
                style={[styles.button, { backgroundColor: 'red' }]}
                title="VOLVER" onPress={() => navigation.navigate('Inicio')}>
                <Text style={styles.text} >volver</Text>
            </Pressable>      
            
            </View>
    );
}


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        width: '40%',
        backgroundColor: 'black',
        margin: 10,
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

export default Selection;