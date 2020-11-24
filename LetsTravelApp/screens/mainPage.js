import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import logo from "../assets/World.png";

export default function App() {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.baseText}>Search your Destination</Text>
      <TextInput
        style={styles.textInput}
        inlineImageLeft="search_icon"
        placeholder="Country"
        onChangeText={(text) => setText(text)}
      />
      <View style={styles.myButton}>
        <Button
          type="solid"
          title="Submit"
          color="blue"
          onPress={checkInput(text)}
        />
      </View>
    </View>
  );
}

function checkInput(text) {
  if (text == "USA") {
    return 1;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    width: 300,
    height: 60,
    alignSelf: "center",
    color: "#000",
    position: "absolute",
    marginTop: 50,
  },
  myButton: {
    paddingTop: 80,
    fontSize: 15,
    right: 60,
    position: "absolute",
  },
  textInput: {
    textAlign: "center",
    justifyContent: "center",
    width: 300,
    height: 40,
    alignSelf: "center",
    color: "#000",
    position: "absolute",
    marginTop: 80,
    backgroundColor: "#FFF",
  },
});