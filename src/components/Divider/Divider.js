import { View, StyleSheet } from "react-native";

export default function Divider() {
    return (
        <View style={styles.divider} />
    )
}

const styles = StyleSheet.create({
    divider: {
        height: '100%',
        width: 1,
        backgroundColor: 'white'
    }
})