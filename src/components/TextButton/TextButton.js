import { StyleSheet, View, TouchableOpacity } from "react-native"

import Texto from "../Texto/Texto";

import { width } from "../Sizes/Sizes";

export default function TextButton(props) {

    return (
        <TouchableOpacity style={styles.container}>
            <Texto tam="TextButton" texto={props.texto} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        color: "white",
        width: width * 0.8,
    }
});