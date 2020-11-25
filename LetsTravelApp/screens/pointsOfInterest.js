import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import logo from "../assets/Temple.png";
import { data } from "./countryData";

export default function SafteyTips({ navigation }) {
  const country = navigation.getParam("country");
  const pointOfInterest = data[country].Interest;
  return (
    <View style={styles.background}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> Points of Interest </Text>
      </View>

      <View style={styles.paragraph}>
        <Text style={styles.textInterest}> {pointOfInterest} </Text>
      </View>

      <Image source={logo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "purple",
  },
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#34526D",
  },
  titleText: {
    height: 50,
    textAlign: "center",
    fontFamily: "rowdies",
    fontSize: 40,
  },
  titleContainer: {
    paddingTop: 40,
    paddingBottom: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  paragraph: {
    flexShrink: 1,
    margin: 20,
    fontSize: 18,
    textAlign: "left",
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
  },
  logo: {
    marginTop: 30,
    alignSelf: "center",
    width: 350,
    height: 300,
    overflow: "hidden",
  },
  textInterest: {
    padding: 20,
  },
});
