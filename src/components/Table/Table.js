import { useState } from "react";

import { StyleSheet, ScrollView, View } from "react-native";

import ItemTable from "../ItemTable/ItemTable";
import { height } from "../Sizes/Sizes";
import Modal from "../Modal/Modal";

export default function Table(props) {

    const data = props.data

    return (
        <View style={styles.container}>
            <ScrollView>
                {data.map((item, index) => (
                    <ItemTable key={index} tipo={item.tipo} carga={item.carga} exercicio={item.exercicio} nome={item.nome} sigla={item.sigla} onPress={props.onPress}/>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: height * 0.5,
        marginVertical: 10,
        display: "flex",
        justifyContent: "center"
    },
});