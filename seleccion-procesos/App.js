import * as React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Process from './src/screen/procesos';
import Selection from './src/screen/seleccion';
import OnePreocess from './src/view/process/one';
import FourProcess from './src/view/process/four';
import TwoProcess from './src/view/process/two';
import ThreeProcess from './src/view/process/three';
import OneSelection from './src/view/selection/one';
import TwoSelection from './src/view/selection/two';
import ThreeSelection from './src/view/selection/three';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <TouchableWithoutFeedback
          style={styles.button}
          title="Procesos"
          onPress={() => navigation.navigate('Procesos')}>
          <View style={styles.button}>
            <Text style={styles.text}>procesos</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={styles.button}
          title="Seleccion"
          onPress={() => navigation.navigate('Seleccion')}>
          <View style={styles.button}>
            <Text style={styles.text}>Seleccion</Text>
          </View>
        </TouchableWithoutFeedback>

      </ScrollView>

      <Pressable
        onPress={
          () => Linking.openURL('https://gabrielcodigo.com/')
        }
      ><Text style={styles.buttonFooder}>gabrielcodigo.com</Text></Pressable>


    </View>

  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio"
        screenOptions={
          {
            // headerShown: false, 
          }
        }
      >
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Procesos" component={Process} />
        <Stack.Screen name="Seleccion" component={Selection} />
        <Stack.Screen name="Uno Procesos" component={OnePreocess} />
        <Stack.Screen name="Dos Procesos" component={TwoProcess} />
        <Stack.Screen name="Tres Procesos" component={ThreeProcess} />
        <Stack.Screen name="Cuatro Procesos" component={FourProcess} />
        <Stack.Screen name="Uno Seleccion" component={OneSelection} />
        <Stack.Screen name="Dos Seleccion" component={TwoSelection} />
        <Stack.Screen name="Tres Seleccion" component={ThreeSelection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#61dafb',
    padding: 10,
    margin: 10,
  },
  text: {
    textTransform: 'uppercase',

  },
  buttonFooder: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    width: '100%',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: 'black',
    margin: 10,
    textDecorationLine: 'underline',
    textDecorationColor: '#f6c32c',
  },

});



export default App;