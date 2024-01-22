import { StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function ButtonGoBack() {
    return (
        <TouchableOpacity style={styles.container}> 
            <Ionicons
                name="ios-arrow-back"
                size={48}
                color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 100,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
        padding: 10,
        position: "absolute",
        left: 25,
        bottom: 25
    }
})