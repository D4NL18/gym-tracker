import { StyleSheet, View } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

import { width } from "../Sizes/Sizes";
import Texto from '../Texto/Texto'
import Divider from "../Divider/Divider";

export default function ItemTable(props) {
    if (props.tipo == "EditAndRemove") {
        return (
            <View style={styles.container}>
                <View style={{ width: '70%', paddingHorizontal: 5 }}>
                    <Texto texto={props.exercicio} tam="Botao" />
                </View>

                <View style={{ width: '30%', paddingHorizontal: 5, justifyContent: "space-around", flexDirection: "row" }}>
                    <Ionicons
                        name="pencil"
                        size={32}
                        color="white" />
                    <Ionicons
                        name="trash"
                        size={32}
                        color="white" />
                </View>
            </View>
        )
    } else if (props.tipo == "carga") {
        return (
            <View style={styles.container}>
                <View style={{ width: '80%', paddingHorizontal: 5 }}>
                    <Texto texto={props.exercicio} tam="Botao" />
                </View>
                <Divider />
                <View style={{ width: '20%', paddingHorizontal: 5 }}>
                    <Texto texto={props.carga} tam="Botao" />
                </View>
            </View>

        )
    } else {
        return (
            <View style={styles.container}>
                <View style={{ width: '80%', paddingHorizontal: 5 }}>
                    <Texto texto={props.exercicio} tam="Botao" />
                </View>
                <Divider />
                <View style={{ width: '20%', paddingHorizontal: 5, alignItems: "center" }}>
                    <Ionicons
                        name={props.tipo === "edit" ? "pencil" : props.tipo === "remove" ? "trash" : ""}
                        size={32}
                        color="white" />
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#9C01D2",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: width * 0.9,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 7,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
        marginVertical: 10,
    }
})