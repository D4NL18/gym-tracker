import { useState } from "react";

import { StyleSheet, View } from "react-native";

import Texto from "../../components/Texto/Texto";
import Table from "../../components/Table/Table";
import ButtonAddItem from "../../components/ButtonAddItem/ButtonAddItem";
import Modal from "../../components/Modal/Modal";
import { height } from "../../components/Sizes/Sizes";

export default function AdicionarTreino() {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    }
    const closeModal = () => setModalVisible(false);

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
            <Texto texto="Adicionar Treino" tam="Medio" />
            <Table data={data} />
            <ButtonAddItem onPress={openModal} />
            <Modal
                isVisible={modalVisible}
                onClose={closeModal}
                texto="Adicionar Exercicio"
                textoBotao="Confirmar"
                tipo="ModalInput"
                label="Nome"
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: height * 0.1,
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly"
    }
})