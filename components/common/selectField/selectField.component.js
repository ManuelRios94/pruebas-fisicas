import React from "react";
import { Picker } from "react-native";
import { styles } from "./style";

const SelectField = ({options, onChange, name, value}) => {
  return (
      <Picker
        name={name}
        selectedValue={value}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
      >
        { 
            options.map((op) => {
                return (<Picker.Item key={op.value} label={op.label} value={op.value} />)}
            )
        }
      </Picker>
  );
}

export default SelectField;
