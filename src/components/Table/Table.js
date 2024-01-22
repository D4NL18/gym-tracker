import { StyleSheet, ScrollView, View } from "react-native";

import ItemTable from "../ItemTable/ItemTable";
import { width, height } from "../Sizes/Sizes";

export default function Table(props) {

    const data = props.data

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {data.map((item, index) => (
                    <ItemTable key={index} tipo={item.tipo} carga={item.carga} exercicio={item.exercicio} />
                ))}
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
    },
    container: {
      height: height * 0.7,
      marginVertical: 10
    },
  });