import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../utils/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.secondaryColor,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: colors.secondaryColor,
    fontSize: 22,
  },
});
export default NumberContainer;
