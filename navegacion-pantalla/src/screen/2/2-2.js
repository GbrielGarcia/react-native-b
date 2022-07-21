import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';




const DosScreen = ({ navigation }) => {
    return (
            <View style={styles.content}>
                <TouchableWithoutFeedback
                    style={styles.button}
                    title="Seleccion"
                    onPress={() => navigation.navigate('Uno')}>
                    <View style={styles.button}>
                        <Text style={styles.text}>uno</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    style={styles.button}
                    title="Seleccion"
                    onPress={() => navigation.navigate('Tres')}>
                    <View style={styles.button}>
                        <Text style={styles.text}>tres</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    style={styles.button}
                    title="Seleccion"
                    onPress={() => navigation.navigate('Cuatro')}>
                    <View style={styles.button}>
                        <Text style={styles.text}>cuatro</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    style={styles.button}
                    title="Seleccion"
                    onPress={() => navigation.navigate('Cinco')}>
                    <View style={styles.button}>
                        <Text style={styles.text}>cinco</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
    );
}
const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
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


export default DosScreen;