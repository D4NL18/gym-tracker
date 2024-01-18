import { StyleSheet, View, TouchableOpacity } from "react-native"

import Texto from "../Texto/Texto";

import { width } from "../Sizes/Sizes";

export default function CustomButton(props) {

    return (
        <TouchableOpacity style={styles.container}>
            <Texto tam="Botao" texto={props.texto} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9C01D2',
        color: "white",
        width: width * 0.8,
        borderWidth: 1,
        borderRadius: 7,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
    }
});