import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Texto from "../Texto/Texto";
import Button from "../Button/Button";
import InputAndLabel from "../InputAndLabel/InputAndLabel";
import { width, height } from "../Sizes/Sizes";

export default function CustomModal(props) {

    if (props.tipo == "ModalInput") {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.isVisible}
                onRequestClose={props.onClose}
            >

                <View
                    activeOpacity={1}
                    style={styles.container}
                >
                    <TouchableOpacity style={styles.background} onPress={props.onClose} />
                    <LinearGradient
                        colors={[
                            '#BB1BFB',
                            '#D109E2',
                        ]}
                        locations={[0, 1]}
                        style={styles.content}
                    >
                        <Texto texto={props.texto} tam="Medio" />
                        <InputAndLabel label={props.label} />

                        <Button texto={props.textoBotao} onPress={props.onClose} />
                    </LinearGradient>
                    <TouchableOpacity style={styles.background} onPress={props.onClose} />
                </View>
            </Modal >
        );
    } else {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.isVisible}
                onRequestClose={props.onClose}
            >

                <View
                    activeOpacity={1}
                    style={styles.container}
                >
                    <TouchableOpacity style={styles.background} onPress={props.onClose} />
                    <LinearGradient
                        colors={[
                            '#BB1BFB',
                            '#D109E2',
                        ]}
                        locations={[0, 1]}
                        style={styles.content}
                    >
                        <Texto texto={props.texto} tam="Medio" />
                        <Button texto={props.textoBotao} onPress={props.onClose} />
                    </LinearGradient>
                    <TouchableOpacity style={styles.background} onPress={props.onClose} />
                </View>
            </Modal >
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: height * 0.4,
        width: width * 0.9,
        borderRadius: 10,
        elevation: 5,
    },
    background: {
        height: height * 0.3,
        width: width,
    }
});
