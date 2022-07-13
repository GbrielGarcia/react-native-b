import * as React from 'react';

import { Pressable, TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';

function Process({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableWithoutFeedback
                style={styles.button}
                title="Seleccion"
                onPress={() => navigation.navigate('UnoProcess')}>
                <View style={styles.button}>
                    <Text style={styles.text}>uno</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                style={styles.button}
                title="Seleccion"
                onPress={() => navigation.navigate('DosProcess')}>
                <View style={styles.button}>
                    <Text style={styles.text}>dos</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                style={styles.button}
                title="Seleccion"
                onPress={() => navigation.navigate('TresProcess')}>
                <View style={styles.button}>
                    <Text style={styles.text}>tres</Text>
                </View>
            </TouchableWithoutFeedback>
            <Pressable
                style={[styles.button, { backgroundColor: 'red' }]}
                title="VOLVER" onPress={() => navigation.navigate('Home')}>
                <Text style={styles.text} >volver</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
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
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textTransform: 'uppercase',
    },

});

export default Process;