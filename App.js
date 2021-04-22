import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TitleBar from "./Components/TitleBar";
import StartScreen from "./Screens/StartScreen";
import GameScreen from "./Screens/GameScreen";

export default function App() {
  const [number, setNumber] = useState();
  const [play, setPlay] = useState(false);

  const gameHandler = (userNumber) => {
    setNumber(userNumber);
    setPlay(true);
  };

  const reStart = () => {
    setPlay(false);
  };

  let startGame = <StartScreen gameHandler={gameHandler} />;
  if (play) {
    startGame = <GameScreen choice={number} restart={reStart} />;
  }
  return (
    <View style={styles.screen}>
      <TitleBar title="Guess A Number" />
      {startGame}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
