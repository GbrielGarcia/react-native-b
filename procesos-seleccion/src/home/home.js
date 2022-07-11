

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Processes from "../screen/processes";
import Selection from "../screen/selection";
const Home = () => {
    const Tab = createBottomTabNavigator();
    return (

        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route, }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Procesos') {
                            iconName = focused
                                ? 'code-download'
                                : 'code-download-outline';
                        }else {
                            iconName = focused ? 'create' : 'create-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Procesos" component={Processes} />
                <Tab.Screen name="Seleccion" component={Selection} />

            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Home;

