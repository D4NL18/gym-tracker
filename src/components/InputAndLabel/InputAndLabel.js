import { View, StyleSheet} from 'react-native'
import Input from '../Input/Input'
import Label from '../Label/Label'

export default function InputAndLabel(props) {
    return(
        <View>
            <Label texto={props.label} />
            <Input tipo={props.tipo} placeholder={props.placeholder} items={props.items} />
        </View>
    )
}
