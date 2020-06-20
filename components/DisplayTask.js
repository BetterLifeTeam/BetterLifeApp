import React from "react";
import { Text, View } from "react-native";

function DisplayTask(props) {
    return (<View>
                <Text>{props.item.nom}</Text>
            </View>);
}

export default DisplayTask;