import { useState } from "react";

import { View, StyleSheet } from "react-native";

import Texto from "../../components/Texto/Texto";
import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import Button from "../../components/Button/Button";
import TextButton from "../../components/TextButton/TextButton";
import { width } from "../../components/Sizes/Sizes";
import Modal from "../../components/Modal/Modal";

export default function NewPassword() {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return (
        <View style={styles.container}>
            <Texto texto="Recuperar Senha" tam="Medio" />
            <InputAndLabel label="Senha" />
            <InputAndLabel label="Repetir Senha" />
            <Button texto="Trocar Senha" onPress={openModal} />
            <Modal
                isVisible={modalVisible}
                onClose={closeModal}
                texto="Senha cadastrada com sucesso!"
                textoBotao="OK"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: width * 0.4,
        justifyContent: "space-evenly"
    },
})