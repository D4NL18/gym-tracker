import { Text, TextInput, StyleSheet, Dimensions } from "react-native"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Input(props) {

    return (
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            secureTextEntry={props.tipo == "senha"}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        width: width * 0.8,
        height: 50,
        borderWidth: 1,
        borderRadius: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
        padding: 10,
        marginVertical: 25
    },
});