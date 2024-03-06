import { ScrollView, StyleSheet, View } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

import Texto from "../../components/Texto/Texto";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";

export default function TreinoDeHoje({ navigation }) {

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
            <View >
                <Texto tam="Medio" texto="Treinar Agora!" />
                <Texto tam="Subtitle" texto={formattedDate} />
            </View >
            <View style={styles.ContainerItems}>
                <Table data={data} />
            </View>
            <Button texto="Finalizar Treino"  onPress={() => navigation.navigate('Menu')} />
        </LinearGradient >
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