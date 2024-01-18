import {Text, StyleSheet} from "react-native"
import { useState, useEffect } from "react"

export default function Texto(props) {

    return(
        <Text style={styles.texto}>{props.texto}</Text>
    )
}

const styles = StyleSheet.create({
    texto: {
      fontFamily: 'KeaniaOne-Regular',
      color: 'white',
      fontSize: 16,
      marginBottom: 5
    },
});