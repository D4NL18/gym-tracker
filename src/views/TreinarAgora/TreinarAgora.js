import { StyleSheet, View } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

import { height } from "../../components/Sizes/Sizes";
import Texto from "../../components/Texto/Texto";
import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import Button from "../../components/Button/Button";

export default function TreinarAgora({navigation}) {

    items = [
        { label: 'Treino A - Peito' },
        { label: 'Treino B - Costas' },
        { label: 'Treino C - Perna' },
        { label: 'Treino D - Braço' },
        { label: 'Treino E - Ombro' },
    ]

    const today = new Date();

    const formattedDate = today.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

    return (
        <LinearGradient
            colors={[
                'rgba(235,0,255,0.85)',   // EB00FF em 85%
                'rgba(173,9,238,0.85)',   // AD09EE em 85%
                'rgba(173,9,238,1)',      // AD09EE em 100%
                'rgba(173,9,238,0.85)',   // AD09EE em 85%
                'rgba(235,0,255,0.8)'     // EB00FF em 80%
            ]}
            locations={[0, 0.25, 0.5, 0.75, 1]}
            style={styles.container}
        >
            <View>
                <Texto tam="Medio" texto="Treinar Agora!" />
                <Texto tam="Subtitle" texto={formattedDate} />
            </View>
            <InputAndLabel label="Qual o treino de hoje?" tipo="Select" items={items} placeholder="Selecione um treino" />
            <Button texto="Começar Treino" onPress={() => navigation.navigate('TreinoDeHoje')} />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: height * 0.1,
        flex: 1,
        justifyContent: "space-evenly",
    }
})