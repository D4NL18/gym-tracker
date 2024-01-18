import React, { useState } from "react";
import { StyleSheet, Dimensions, View, Image, TextInput } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

import { width } from "../Sizes/Sizes";

export default function Input(props) {
  const [selectedValue, setSelectedValue] = useState(null);

  if (props.tipo === "Select") {
    const renderCustomIcon = () => (
      <View style={styles.iconContainer}>
        <Image source={IconSelect} style={styles.icon} />
      </View>
    );

    return (
      <View style={styles.pickerContainer}>
        <RNPickerSelect
        style={{ inputIOS: styles.pickerInput, iconContainer: styles.iconContainer }}
          placeholder={{ label: props.placeholder, value: null }}
          items={props.items}
          onValueChange={(value) => setSelectedValue(value)}
        />
      </View>
    );
  } else {
    return (
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.tipo === "Senha"}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: width * 0.8,
    height: 50,
    borderWidth: 1,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    padding: 10,
  },
  pickerContainer: {
    backgroundColor: 'white',
    width: width * 0.8,
    height: 50,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'black',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  pickerInput: {
    padding: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  invisibleItem: {
    display: 'none',
  }
});
