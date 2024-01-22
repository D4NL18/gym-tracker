import { useState } from "react";

import { View, StyleSheet } from "react-native";

import Texto from "../../components/Texto/Texto";
import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import Button from "../../components/Button/Button";
import TextButton from "../../components/TextButton/TextButton";
import { height, width } from "../../components/Sizes/Sizes";
import Modal from "../../components/Modal/Modal";

export default function Menu() {

    return (
        <View style={styles.container}>
            <Texto texto="Menu" tam="Grande" />
            <View style={styles.containerBotoes}>
                <Button texto="Treinar Agora!" />
                <Button texto="Treinos e Exercícios" />
                <Button texto="Evolução" />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: height * 0.2
    },
    containerBotoes: {
        height: height*0.6,
        display: "flex",
        justifyContent: "space-evenly"
    }
})