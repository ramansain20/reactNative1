import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Card from "../Card";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min));
  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, props.userChoice)
  );

  return (
    <View style={styles.screen}>
      <Card style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Opponent`s Guess
          {currentGuess}
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

export default GameScreen;
