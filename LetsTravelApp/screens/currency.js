import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  Keyboard,
  TextInput,
} from "react-native";
import { Button } from "react-native-elements"; // Used React Native UI Library for button
import { data } from "./countryData";

export default function currency({ navigation }) {
  const countryOfTravel = navigation.getParam("country");
  const [homeCountry, setCountry] = useState("");
  const [text, setText] = useState("");
  const [results, setResults] = useState("");

  function calculateCurrencyExchange() {
    if (!(homeCountry in data[countryOfTravel].exchange)) {
      setResults("Not valid country!");
    } else {
      setResults(
        data[homeCountry].dollarSymbol +
          (data[countryOfTravel].exchange[homeCountry] * text).toFixed(2)
      );
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Currency Exchange</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Amount"
          onChangeText={(text) => setText(text)}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Home Country"
          onChangeText={(countryOfTravel) => setCountry(countryOfTravel)}
        />
        <Text style={styles.baseText}>{results}</Text>
        <View style={styles.submitButton}>
          <Button
            type="solid"
            title="Submit"
            onPress={calculateCurrencyExchange}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34526D",
    flexDirection: "column",
    paddingTop: 25,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    alignSelf: "center",
    color: "#000",
    marginTop: 50,
    fontFamily: "rowdies",
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    alignSelf: "center",
    color: "#000",
    marginTop: 50,
    fontFamily: "rowdies",
  },
  textInput: {
    textAlign: "center",
    justifyContent: "center",
    width: 300,
    height: 40,
    alignSelf: "center",
    color: "#000",
    marginTop: 80,
    backgroundColor: "#FFF",
  },
  submitButton: {
    paddingTop: 80,
    marginTop: 50,
    fontSize: 15,
    alignItems: "center",
  },
});
