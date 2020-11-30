import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { data } from "./countryData"; // Importing hard coded backend data

export default function DoAndDont({ navigation }) {
  const country = navigation.getParam("country");
  const dos = data[country].Do;
  const donts = data[country].Dont;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> Do's And Don'ts </Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>Do:</Text>
      </View>
      <View style={styles.doStyle}>
        <Text style={styles.textBorder}> {dos} </Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>Don't:</Text>
      </View>
      <View style={styles.dontStyle}>
        <Text style={styles.textBorder}> {donts} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#34526D",
  },
  titleContainer: {
    paddingTop: 40,
    paddingBottom: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleText: {
    height: 50,
    textAlign: "center",
    fontFamily: "rowdies",
    fontSize: 40,
  },
  subtitleText: {
    height: 25,
    textAlign: "left",
    fontFamily: "rowdies",
    fontSize: 25,
  },
  subtitleContainer: {
    fontSize: 50,
    paddingTop: 40,
    paddingLeft: 20,
    paddingBottom: 1,
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dontStyle: {
    flexShrink: 1,
    margin: 20,
    fontSize: 18,
    textAlign: "left",
    backgroundColor: "#EE9090",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
  },
  doStyle: {
    flexShrink: 1,
    margin: 20,
    fontSize: 18,
    textAlign: "left",
    backgroundColor: "#90EE90",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
  },
  textBorder: {
    padding: 20,
  },
});
