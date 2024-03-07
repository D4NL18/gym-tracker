import { StyleSheet, View } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

import Texto from "../../components/Texto/Texto";
import Table from "../../components/Table/Table";


export default function Exercicios({navigation}) {

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
                <Texto texto="Treinos e Exercícios" tam="Medio" />
                <Texto texto="Treino X" tam="Subtitle" />
            </View>
            <View>
                <Table data={data} />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})