import { View, Text, StyleSheet } from 'react-native';

function About() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.titleInit}>Informacion</Text>
            <Text style={styles.title}>Nombre: Alberto Gabriel Guaman Garcia</Text>
            <Text style={styles.title}>Carrera: Desarrollo de Software</Text>
            <Text style={styles.title}>Semestre: Quinto Semestre</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleInit: {
        textTransform: 'uppercase',
        color: 'black',
        margin: 10,
        fontWeight: 'bold',
        fontSize: 30,
    },

    title: {
        textTransform: 'uppercase',
        color: 'black',
        margin: 10,
        fontWeight: 'bold',
    },

});

export default About;