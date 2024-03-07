import { useState } from "react";

import { ScrollView, StyleSheet, View } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

import Texto from "../../components/Texto/Texto";
import Table from "../../components/Table/Table";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { height } from "../../components/Sizes/Sizes";

export default function Treinos({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    }
    const closeModal = () => setModalVisible(false);

    const data = [
        { nome: 'Peito', sigla: 'A', tipo: 'EditAndRemove' },
        { nome: 'Costas', sigla: 'B', tipo: 'EditAndRemove' },
        { nome: 'Perna', sigla: 'C', tipo: 'EditAndRemove' },
        { nome: 'Braço', sigla: 'D', tipo: 'EditAndRemove' },
        { nome: 'Ombro', sigla: 'E', tipo: 'EditAndRemove' },
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
            <Texto texto="Treinos e Exercicios" tam="Medio" />
            <View style={styles.ContainerItems}>
                <Table data={data} onPress={() => navigation.navigate('Exercicios')} />
            </View>
            <Button texto="Adicionar Novo Treino" onPress={openModal} />
            <Modal
                    isVisible={modalVisible}
                    onClose={closeModal}
                    texto="Adicionar Novo Treino"
                    textoBotao="Confirmar"
                    tipo="ModalInput"
                    label="Nome"
                />
        </LinearGradient>
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
    },
    ContainerTitle: {

    },
    ContainerButton: {

    }
})