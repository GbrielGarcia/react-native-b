import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import ButtonComponent from "../components/button";

const Selection = () => {

    return (
        <ScrollView contentContainerStyle={{
            flexGrow: 0.5,
            justifyContent: 'center'
        }}>


            <View style={styles.container} />
            <ButtonComponent title="1" />
            <ButtonComponent title="2" />
            <ButtonComponent title="3" />
            <ButtonComponent title="4" />
            <ButtonComponent title="5" />


        </ScrollView>

    );

}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#eeeeee',
    },
    container: {
        flex: 1,
    }
});

export default Selection;