
import React from "react";
import { Button } from "react-native";

const DefaultButton = ({title, onChange, accessibilityLabel = ""}) => {
  return (
    <Button
        onPress={onChange}
        title={title}
        accessibilityLabel={accessibilityLabel}
    />
  );
}

export default DefaultButton;
