import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { countryData } from "./countryData";

export default function pointOfInterest({ navigation }) {
  const countryOfTravel = navigation.getParam("country");
  const countryTextInterest = countryData[countryOfTravel].Interest;
  const countryImage = countryData[countryOfTravel].Image;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> Points of Interest </Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.textBorder}> {countryTextInterest} </Text>
      </View>
      <Image source={countryImage} style={styles.countryImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "purple",
  },
  container: {
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
  textBox: {
    flexShrink: 1,
    margin: 20,
    fontSize: 18,
    textAlign: "left",
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
  },
  countryImage: {
    marginTop: 20,
    alignSelf: "center",
    width: 350,
    height: 270,
    overflow: "hidden",
  },
  textBorder: {
    padding: 20,
  },
});
