import { useState } from "react";

import { ScrollView, StyleSheet, View } from "react-native";

import Texto from "../../components/Texto/Texto";
import Table from "../../components/Table/Table";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { height } from "../../components/Sizes/Sizes";

export default function Treinos() {

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
        <View style={styles.container}>
            <Texto texto="Treinos e Exercicios" tam="Medio" />
            <View style={styles.ContainerItems}>
                <Table data={data} />
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
        </View>
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