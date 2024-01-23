import { StyleSheet, View } from "react-native";

import Texto from "../../components/Texto/Texto";
import Table from "../../components/Table/Table";


export default function Exercicios() {

    const data = [
        { exercicio: 'Supino Reto', tipo: 'EditAndRemove' },
        { exercicio: 'Supino Inclinado', tipo: 'EditAndRemove' },
        { exercicio: 'Crucifixo', tipo: 'EditAndRemove' },
        { exercicio: 'CrossOver', tipo: 'EditAndRemove' },
        { exercicio: 'Desenvolvimento', tipo: 'EditAndRemove' },
        { exercicio: 'Elevação Lateral', tipo: 'EditAndRemove' },
        { exercicio: 'Triceps Corda', tipo: 'EditAndRemove' },
    ];

    return (
        <View style={styles.container}>
            <View>
                <Texto texto="Treinos e Exercícios" tam="Medio" />
                <Texto texto="Treino X" tam="Subtitle" />
            </View>
            <View>
                <Table data={data} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})