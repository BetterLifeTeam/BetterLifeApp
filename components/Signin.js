import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    titlePage: {
        fontSize: 36,
        fontWeight: "bold",
        color: "green",
        marginTop: 40,
        marginBottom: 16,
        marginHorizontal: 16
    },
    text: {
        fontSize: 12,
        fontWeight: "bold",
    }
});

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titlePage}>SIGN IN</Text>
                <Text style={styles.text}>Pour accéder au contenu de l'application, veuillez vous authentifier</Text>
            </View>
        )
    }
}