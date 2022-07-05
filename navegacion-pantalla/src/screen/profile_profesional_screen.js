import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileProfesionalScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea} >
            <View style={styles.container}>
                <Text style={styles.title}>Perfil Profesional:</Text>
                <Text style={styles.description}>El estudiante al finalizar su formación profesional, debe ser capaz de demostrar sus capacidades relacionadas con conocimientos (saber), habilidades y destrezas (saber hacer) y actitudes (saber ser) en relación con las necesidades del contexto, particularmente:</Text>
                <Text style={styles.description}>Programa aplicaciones de software utilizando lógica de programación y lenguajes específicos, para resolver un problema determinado.
                    Desarrolla software para cualquier ambiente empresarial a partir de la detección de necesidades, levantamiento de información, diseño, análisis, programación, puesta en marcha y entrega funcionando, incluyendo instalación y la capacitación de personal.</Text>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    container: {
        paddingTop: 50,
        textAlign: 'center',

    },
    description: {
        textAlign: 'start',
        padding: 10,
    },
    title: {
        color: '#f6c32c',
        textTransform: 'uppercase'
    },
    safeArea: {
        backgroundColor: '#4a307a',
        flex: 1,
    }
})


export default ProfileProfesionalScreen;