import React from 'react';
import { Text, View, StyleSheet, Image, Pressable, Linking } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';


const DescriptionScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea} >
            <View style={styles.container}>
                <Text style={styles.title}>Descripción de la carrera:</Text>
                <Text style={styles.description}>La carrera Tecnología en Desarrollo de Software en línea forma profesionales capaces de gestionar actividades de trabajo relacionadas a procesos de diseño y desarrollo de software, automatización de procesos en áreas de soporte de infraestructura tecnológica, soporte de redes de datos, gestión de proyectos tecnológicos, con destrezas para operar sistemas:</Text>
                <Text style={styles.description}>Informáticos basados en los fundamentos de diseño de estructuras y plataformas informáticas con estándares internacionales. La metodología de enseñanza es teórica – práctica, puesto que los proyectos que se realizan en diferentes organizaciones les permiten a los estudiantes realizar trabajos de observación y diagnóstico relacionado a las actividades de la carrera.</Text>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 
                        'https://pajaaleksic.com/wp-content/uploads/2019/07/react-native-workshop.jpg',
                    }}
                />
                <Pressable
                    onPress={
                        () => Linking.openURL('https://itsjaponec-my.sharepoint.com/:b:/g/personal/jchalcos_itsjapon_edu_ec/EZ1tSbKnc5hGrtXNf3il3w0BTWMwltolMQWs7JbrjuOd-w?e=iU64i1')
                    }
                >
                    <Text style={styles.url}>
                        Malla Curricular
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    url: {
        textDecorationLine: 'underline',
        textDecorationColor: '#f6c32c',
        textTransform: 'uppercase',
        padding: 10,
    },
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
});

export default DescriptionScreen;