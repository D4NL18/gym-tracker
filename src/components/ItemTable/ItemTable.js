import { StyleSheet, View } from "react-native";

import { width } from "../Sizes/Sizes";
import Texto from '../Texto/Texto'

export default function ItemTable(props) {
    return (
        <View style={styles.container}>
            <View style={{width: '80%', paddingHorizontal: 5}}>
                <Texto texto={props.exercicio} tam="Botao" />
            </View>
            <View style={styles.divider} />
            <View style={{width: '20%', paddingHorizontal: 5}}>
                <Texto texto={props.carga} tam="Botao" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#9C01D2",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: width * 0.8,
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: 7,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
    },
    divider: {
        height: '100%',
        width: 1,
        backgroundColor: 'black'
    }
})