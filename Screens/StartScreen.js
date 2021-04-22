import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../Components/Card";
import color from "../utils/colors";
import InputField from "../Components/InputField";
import NumberContainer from "../Components/NumberContainer";
import { keysIn } from "lodash";

const StartScreen = (props) => {
  const [numberString, setNumberString] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [number, setNumber] = useState();

  const numberInputHandler = (inputText) => {
    setNumberString(inputText.replace(/[^0-9]/g, ""));
  };

  const numberSubmitHandler = () => {
    const num = parseInt(numberString);
    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert("Invalid Number!", "Enter a valid number", [
        { text: "Okey", onPress: clear, style: "destructive" },
      ]);
      return;
    }
    Keyboard.dismiss();
    setConfirmed(true);
    setNumber(num);
  };

  const clear = () => {
    setNumberString("");
  };

  let confirmScreen;

  if (confirmed) {
    confirmScreen = (
      <Card style={styles.confirmCard}>
        <Text>Selected Number </Text>
        <NumberContainer>{number}</NumberContainer>
        <Button title="Start Game" onPress={() => props.gameHandler(number)} />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Let's Play, Give a number</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.lable}>Enter a number</Text>
          <InputField
            style={styles.inputField}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={numberString}
            onSubmitEditing={numberSubmitHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="clear"
                onPress={clear}
                color={color.secondaryColor}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Select"
                onPress={numberSubmitHandler}
                color={color.primaryColor}
              />
            </View>
          </View>
        </Card>
        {confirmScreen}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    maxWidth: "80%",
  },
  lable: {
    fontSize: 25,
    marginVertical: 10,
  },
  inputField: {
    fontSize: 22,
    width: "15%",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  button: {
    width: 70,
  },
  confirmCard: {
    margin: 20,
    alignItems: "center",
  },
});

export default StartScreen;
