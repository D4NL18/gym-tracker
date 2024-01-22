import { useState } from "react";

import { View, StyleSheet } from "react-native";

import Texto from "../../components/Texto/Texto";
import InputAndLabel from "../../components/InputAndLabel/InputAndLabel";
import Button from "../../components/Button/Button";
import TextButton from "../../components/TextButton/TextButton";
import { width } from "../../components/Sizes/Sizes";
import Modal from "../../components/Modal/Modal";


export default function Cadastro() {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    return(
        <View style={styles.container}>
        <View style={styles.containerTitulo}>
            <Texto texto="Cadastro" tam="Grande" />
        </View>
        <View style={styles.containerForm}>
            <InputAndLabel label="E-mail" />
            <InputAndLabel label="Senha" tipo="Senha" />
            <InputAndLabel label="Confirmar Senha" tipo="Senha" />
            <Button texto="Cadastrar" onPress={openModal} />
        </View>
        <View style={styles.containerTextButton}>
            <TextButton texto="Já possui uma conta? Clique aqui para fazer login" />
            <TextButton texto="Esqueceu sua senha? Clique aqui para recuperá-la." />
        </View>
        <Modal
            isVisible={modalVisible}
            onClose={closeModal}
            texto="Registro realizado com sucesso!"
            textoBotao="OK"
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: width * 0.2
    },
    containerTitulo: {
        flex: 20,
        justifyContent: "center",
    },
    containerForm: {
        flex: 60,
        justifyContent: "space-around",
    },
    containerTextButton: {
        flex: 20,
        justifyContent: "space-evenly",
    }
})