import { ScrollView, StyleSheet, View } from "react-native";

import { height } from "../../components/Sizes/Sizes";
import Texto from "../../components/Texto/Texto";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import Modal from "../../components/Modal/Modal";

export default function TreinoDeHoje() {

    const data = [
        { exercicio: 'Supino Reto', carga: '27.5', tipo: 'carga' },
        { exercicio: 'Supino Inclinado', carga: '28', tipo: 'carga' },
        { exercicio: 'Crucifixo', carga: '70', tipo: 'carga' },
        { exercicio: 'CrossOver', carga: '15', tipo: 'carga' },
        { exercicio: 'Elevação Lateral', carga: '14', tipo: 'carga' },
        { exercicio: 'Desenvolvimento', carga: '24', tipo: 'carga' },
        { exercicio: 'Triceps Corda', carga: '20', tipo: 'carga' }
    ];

    const today = new Date();

    const formattedDate = today.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

    return (
        <View style={styles.container} >
            <View >
                <Texto tam="Medio" texto="Treinar Agora!" />
                <Texto tam="Subtitle" texto={formattedDate} />
            </View >
            <View style={styles.ContainerItems}>
                <Table data={data} />
            </View>
            <Button texto="Finalizar Treino" />

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    ContainerItems: {
        display: "flex",
        justifyContent: "center",
        marginVertical: 20,
    }
})