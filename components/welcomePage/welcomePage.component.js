
import React, { useState } from 'react';
import { MALE_GENDER } from "../../constants/constants";
import DefaultButton from "../common/defaultButton/defaultButton.component";
import SelectField from "../common/selectField/selectField.component";
import DateField from "../common/dateField/dateField.component";
import { genderOptions } from "../../utils/option.utils";
import { Text, View } from 'react-native';
import { styles } from "./style";

const WelcomePage = () => {
  const [gender, setGender] = useState(MALE_GENDER);
  const [birthday, setBirthday] = useState("");
  const onSubmit = () => {

  }
  return(
    <View style={styles.container}>
      <View style={styles.groupBirthday}>
        <Text style={styles.txtBirthday}>Fecha de Nacimiento: </Text>
        <DateField
          required 
          name="Birthday"
          value={birthday}
          onChange={setBirthday}
        />
      </View>  
      <Text>Genero: </Text>
      <SelectField 
        name="Gender"
        value={gender}
        onChange={setGender}
        options={genderOptions}
      />
      <DefaultButton 
        title="Guardar"
        onChange={onSubmit}
      />
    </View>
  );
}

export default WelcomePage;