import React from 'react';
import DatePicker from 'react-native-datepicker';
import { styles } from './style';

const DateField = ({value, name, onChange}) => {
  return(
      <DatePicker
        name={name}
        style={styles.dateField}
        date={value}
        mode="date"
        placeholder="DD-MM-AAAA"
        format="DD-MM-YYYY"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        customStyles={{
          ...styles.dateInput,
          ...styles.dateIcon
        }}
        onDateChange={onChange}
      />
  )
}

export default DateField;