import {Text, StyleSheet} from "react-native"
import { useState, useEffect } from "react"





export default function TituloGrande(props) {

    const [tam, setTam] = useState(24)

    useEffect(() => {
        // Usar um efeito para atualizar o tamanho quando a propriedade size for alterada
        if (props.tam === "Grande") {
          setTam(64);
        } else if (props.tam === "Medio") {
          setTam(40);
        } else if (props.tam === "Subtitle") {
          setTam(24);
        } else if (props.tam === "Label") {
          setTam(16);
        }
      }, [props.tam]);
    

    return(
        <Text style={[styles.texto, {fontSize: tam}]}>{props.texto}</Text>
    )
}

const styles = StyleSheet.create({
    texto: {
      fontFamily: 'KeaniaOne-Regular',
      color: 'white',
      textAlign: 'center'
    },
});