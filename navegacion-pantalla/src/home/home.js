import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WhySoftwareDevelopementScreen from "../screen/why_software_developerment_screen";
import OcupationalFielScreen from "../screen/ocupational_fiel_screen";
import ProfileProfesionalScreen from "../screen/profile_profesional_screen";
import DescriptionScreen from "../screen/description_screen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = () => {
    const Tab = createBottomTabNavigator();
    return (

        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route, }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'perfil') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Descripcion') {
                            iconName = focused ? 'clipboard' : 'clipboard-outline';
                        } else if (route.name === 'Campo') {
                            iconName = focused ? 'earth-outline' : 'earth';
                        }else {
                            iconName = focused ? 'help' : 'help-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="perfil" component={ProfileProfesionalScreen} />
                <Tab.Screen name="Descripcion" component={DescriptionScreen} />
                <Tab.Screen name="Campo" component={OcupationalFielScreen} />
                <Tab.Screen name="Porque" component={WhySoftwareDevelopementScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Home;