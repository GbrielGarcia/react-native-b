import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback} from "react-native";

export class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: props.title};
    }
    render() {
        return <TouchableWithoutFeedback  onPress={{}}>
            <View style={styles.button}>
                <Text>{this.state.title}</Text>
            </View>
        </TouchableWithoutFeedback>

    }
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#eeeeee',
        flex: 1,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        margin: 15,
      },
});

export default ButtonComponent;