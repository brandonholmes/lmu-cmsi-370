import React from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  Keyboard,
  TextInput,
} from "react-native";
import { Button } from "react-native-elements";
import { data } from "./countryData";

export default function currency({ navigation }) {
  const homeCountry = "Mexico";
  const country = navigation.getParam("country");

  const [text, setText] = React.useState("");
  const [results, setResults] = React.useState("");

  const dollarSymbol = {
    USA: "$",
    Mexico: "$",
    Canada: "$",
  };

  function calculateAmount() {
    setResults(
      data[homeCountry].dollarSymbol +
        (data[country].exchange[homeCountry] * text).toFixed(2)
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.baseText}>Currency Exchange</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Amount"
          onChangeText={(text) => setText(text)}
          keyboardType="number-pad"
        />
        <Text style={styles.baseText}>{results}</Text>
        <View style={styles.myButton}>
          <Button type="solid" title="Submit" onPress={calculateAmount} />
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
  baseText: {
    fontWeight: "bold",
    fontSize: 30,
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
  myButton: {
    paddingTop: 80,
    marginTop: 50,
    fontSize: 15,
    alignItems: "center",
  },
});
