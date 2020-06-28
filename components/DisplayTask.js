import React from "react";
import { Text, View } from "react-native";

function DisplayTask(props) {
    return (<View>
                <Text>{props.task.nom}</Text>
            </View>);
}

export default DisplayTask;