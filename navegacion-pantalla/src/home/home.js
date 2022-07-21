import React from "react";
import { NavigationContainer } from "@react-navigation/native";


import TabNavigagor from "../navegacion/tab";


const Home = () => {
    return (

        <NavigationContainer>
            <TabNavigagor />
        </NavigationContainer>
    );
};

export default Home;