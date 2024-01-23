import { StyleSheet, View } from "react-native";

import { height } from "../../components/Sizes/Sizes";
import Texto from "../../components/Texto/Texto";
import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import Button from "../../components/Button/Button";

export default function TreinarAgora() {

    const today = new Date();

    const formattedDate = today.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

        return(
        <View style = { styles.container } >
            <View>
                <Texto tam="Medio" texto="Treinar Agora!" />
                <Texto tam="Subtitle" texto={formattedDate} />
            </View>
            <InputAndLabel label="Qual o treino de hoje?" />
            <Button texto="Começar Treino" />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: height * 0.1,
        flex: 1,
        justifyContent: "space-evenly",
    }
})