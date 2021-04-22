import React from "react";
import { TextInput, StyleSheet, ImagePropTypes } from "react-native";

const InputField = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.inputField, ...props.style }} />
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginVertical: 10,
    height: 30,
  },
});
export default InputField;
