import { useState } from "react";

import { View, StyleSheet } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

import Texto from "../../components/Texto/Texto";
import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import Button from "../../components/Button/Button";
import TextButton from "../../components/TextButton/TextButton";
import { height, width } from "../../components/Sizes/Sizes";
import Modal from "../../components/Modal/Modal";

    export default function Menu({navigation}) {

    return (
        <LinearGradient
            colors={[
                'rgba(235,0,255,0.85)',   // EB00FF em 85%
                'rgba(173,9,238,0.85)',   // AD09EE em 85%
                'rgba(173,9,238,1)',      // AD09EE em 100%
                'rgba(173,9,238,0.85)',   // AD09EE em 85%
                'rgba(235,0,255,0.8)'     // EB00FF em 80%
            ]}
            locations={[0, 0.25, 0.5, 0.75, 1]}
            style={styles.container}
        >
            <Texto texto="Menu" tam="Grande" />
            <View style={styles.containerBotoes}>
                <Button texto="Treinar Agora!" onPress={() => navigation.navigate('TreinarAgora')} />
                <Button texto="Treinos e Exercícios" onPress={() => navigation.navigate('Treinos')} />
                <Button texto="Evolução" />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: height * 0.2
    },
    containerBotoes: {
        height: height * 0.6,
        display: "flex",
        justifyContent: "space-evenly"
    }
})