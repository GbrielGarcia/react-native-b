import React from 'react';
import { Text, View, StyleSheet, FlatList, Image} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const WhySoftwareDevelopementScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea} >
            <View style={styles.container}>
                <Text style={styles.title}>¿Por qué estudiar Desarrollo de Software en el IST Japón?</Text>
                <Text style={styles.description}>Tener conocimientos de desarrollo de software te permite, por ejemplo, crear una aplicación para solucionar un problema que veas en el mundo:</Text>
                <FlatList
                    data={[
                        { key: 'Docentes profesionales de 4to Nivel' },
                        { key: 'Uso de la tecnología como el medio principal en el aprendizaje.' },
                        { key: 'Emprendimientos en nuevas tecnologías' },
                        { key: 'Una de las mejores Instituciones del país Ecuador en educación Superior' },
                        { key: 'Cuenta con talleres y amplios espacios verdes.' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.itemText}>{item.key}</Text>}
                />
                  <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://edteam-media.s3.amazonaws.com/blogs/original/a6513f9f-e88e-48a9-a7e1-a894ab291225.jpg',
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    itemText:{
        textAlign: 'start',
        margin: 10,
        color: '#b8b4b4',
    },
    container: {
        paddingTop: 50,
        textAlign: 'center',

    },
    logo: {
        width: 200,
        height: 200,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    description: {
        textAlign: 'justify',
        padding: 10,
    },
    title: {
        color: '#f6c32c',
        textTransform: 'uppercase',
        textAlign: 'justify',
        margin: 10,
    },
    safeArea: {
        backgroundColor: '#4a307a',
        flex: 1,
    }
});



export default WhySoftwareDevelopementScreen;