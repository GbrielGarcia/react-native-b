import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WhySoftwareDevelopementScreen from "../screen/why_software_developerment_screen";
import OcupationalFielScreen from "../screen/ocupational_fiel_screen";
import ProfileProfesionalScreen from "../screen/profile_profesional_screen";
import DescriptionScreen from "../screen/description_screen";
import Ionicons from "react-native-vector-icons/Ionicons";

import UnoScrenn from "../screen/2/2-1";
import DosScrenn from "../screen/2/2-2";
import TresScrenn from "../screen/2/2-3";
import CuatroScreen from "../screen/2/2-4";
import CincoScreen from "../screen/2/2-5";

const TabNavigagor = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route, }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Uno') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Dos') {
                        iconName = focused ? 'clipboard' : 'clipboard-outline';
                    } else if (route.name === 'Tres') {
                        iconName = focused ? 'earth-outline' : 'earth';
                    } else if (route.name === 'Cuatro') {
                        iconName = focused ? 'beer' : 'beer-outline';
                    } else {
                        iconName = focused ? 'help' : 'help-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Uno" component={UnoScrenn} />
            <Tab.Screen name="Dos" component={DosScrenn} />
            <Tab.Screen name="Tres" component={TresScrenn} />
            <Tab.Screen name="Cuatro" component={CuatroScreen} />
            <Tab.Screen name="Cinco" component={CincoScreen} />
            {/* <Tab.Screen name="Porque" component={WhySoftwareDevelopementScreen} /> */}
        </Tab.Navigator>
    );
};

export default TabNavigagor;