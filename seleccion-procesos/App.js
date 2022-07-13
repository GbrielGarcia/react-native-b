import * as React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Process from './src/screen/procesos';
import Selection from './src/screen/seleccion';
import UnoProcess from './src/view/process/one';
import UnoSelection from './src/view/selection/one';
import DosProcess from './src/view/process/two';
import TresProcess from './src/view/process/three';
import DosSelection from './src/view/selection/two';
import TresSelection from './src/view/selection/three';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableWithoutFeedback
        style={styles.button}
        title="Procesos"
        onPress={() => navigation.navigate('Process')}>
        <View style={styles.button}>
          <Text style={styles.text}>procesos</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        style={styles.button}
        title="Seleccion"
        onPress={() => navigation.navigate('Selection')}>
        <View style={styles.button}>
          <Text style={styles.text}>Seleccion</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={
          {
            
            // headerShown: false, 
          
          }
        }
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Process" component={Process} />
        <Stack.Screen name="Selection" component={Selection} />
        <Stack.Screen name="UnoProcess" component={UnoProcess} />
        <Stack.Screen name="DosProcess" component={DosProcess} />
        <Stack.Screen name="TresProcess" component={TresProcess} />
        <Stack.Screen name="UnoSelection" component={UnoSelection} />
        <Stack.Screen name="DosSelection" component={DosSelection} />
        <Stack.Screen name="TresSelection" component={TresSelection} />
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

  }

});



export default App;