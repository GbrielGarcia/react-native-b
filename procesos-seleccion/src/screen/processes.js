import React from "react";
import { View, Text, StyleSheet , ScrollView} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import ButtonComponent from "../components/button";

const Processes = () => {

    return (
<ScrollView>
<SafeAreaView style={styles.safeArea}>

<ButtonComponent title="1" />
<ButtonComponent title="2" />
<ButtonComponent title="3" />
<ButtonComponent title="4" />
<ButtonComponent title="5" />
<ButtonComponent title="6" />
<ButtonComponent title="7" />
<ButtonComponent title="8" />
<ButtonComponent title="9" />
<ButtonComponent title="10" />           


</SafeAreaView>
</ScrollView>

    );

}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#eeeeee',
        flex: 1,
    },
});

export default Processes;