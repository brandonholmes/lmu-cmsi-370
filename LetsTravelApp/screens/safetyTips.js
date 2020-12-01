import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Unorderedlist from "react-native-unordered-list";
import { data } from "./countryData";

export default function SafetyTips({ navigation }) {
  const countryOfTravel = navigation.getParam("country");
  const transportation = data[countryOfTravel].safetyTips.recTrans;
  const countrySummary = data[countryOfTravel].safetyTips.summary;
  const countryLodging = data[countryOfTravel].safetyTips.lodging;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> Saftey Tips </Text>
      </View>
      <Text style={styles.subTitle}>Summary</Text>
      <View style={styles.textBox}>
        <Text style={styles.textBorder}> {countrySummary} </Text>
      </View>
      <Text style={styles.subTitle}>Lodging</Text>
      <View style={styles.textBox}>
        <Text style={styles.textBorder}> {countryLodging} </Text>
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
  titleText: {
    height: 50,
    textAlign: "center",
    fontFamily: "rowdies",
    fontSize: 40,
  },
  titleContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textBox: {
    flexShrink: 1,
    margin: 20,
    marginTop: 0,
    fontSize: 18,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
  },
  textBorder: {
    padding: 20,
  },
  bulletList: {
    textAlign: "center",
    padding: 20,
  },

  subTitle: {
    fontSize: 20,
    fontFamily: "rowdies",
    paddingLeft: 20,
    textAlign: "left",
  },
});
