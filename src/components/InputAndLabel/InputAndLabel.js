import { View, StyleSheet} from 'react-native'
import Input from '../Input/Input'
import Label from '../Label/Label'

export default function InputAndLabel(props) {
    return(
        <View style={styles.container}>
            <Label texto={props.texto} />
            <Input tipo={props.tipo} placeholder={props.placeholder} items={props.items} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 0
    },
});