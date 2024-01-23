import { StyleSheet, View, TouchableOpacity } from "react-native"

import Ionicons from '@expo/vector-icons/Ionicons';

import Texto from "../Texto/Texto";

export default function ButtonAddItem(props) {

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Ionicons
                name="add-circle-outline"
                size={76}
                color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {

    }
});