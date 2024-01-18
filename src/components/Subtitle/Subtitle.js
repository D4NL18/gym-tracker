import {Text, StyleSheet} from "react-native"

export default function TituloGrande(props) {

    return(
        <Text style={styles.texto}>{props.texto}</Text>
    )
}

const styles = StyleSheet.create({
    texto: {
      fontSize: 24,
      fontFamily: 'KeaniaOne-Regular',
      color: 'white',
      textAlign: 'center'
    },
});