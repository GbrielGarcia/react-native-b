import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image

        style={styles.logo}
        source={

          {


            uri: ' https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png'


          }

        }
      />
      <Text style={styles.frase}>Instituto Tecnologico Japon</Text>
      <Text >Amor al conocimiento</Text>
      <Text style={styles.name}> Alberto Gabriel Guaman Garcia
      </Text>
      <Text  >La carrera Tecnología en Desarrollo de Software en línea forma profesionales capaces de gestionar actividades de trabajo relacionadas a procesos de diseño y desarrollo de software, automatización de procesos en áreas de soporte de infraestructura tecnológica, soporte de redes de datos, gestión de proyectos tecnológicos, con destrezas para operar sistemas informáticos basados en los fundamentos de diseño de estructuras y plataformas informáticas con estándares internacionales. La metodología de enseñanza es teórica – práctica, puesto que los proyectos que se realizan en diferentes organizaciones les permiten a los estudiantes realizar trabajos de observación y diagnóstico relacionado a las actividades de la carrera.</Text>
      <StatusBar style="auto" />
      <Pressable


        onPress={
          () => Linking.openURL('https://gabrielcodigo.com/')
        }
      >
        {({ pressed }) =>

          <Text
            style={{

              padding: 20,
              textDecorationLine: 'underline',

              color: pressed ? 'red' : 'blue'
            }
            }


          >Gabriel Codigo</Text>

        }
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frase: {
    color: 'blue',
    textTransform: 'uppercase'
  },
  name: {
    margin: 5,


  },
  description: {
    padding: 20,
    margin: 15,
    justifyContent: 'flex-end',

  }, logo: {
    width: 200,
    height: 200,
    margin: 10
  },

});
