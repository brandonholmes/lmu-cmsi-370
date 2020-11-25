import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { data } from "./countryData";

export default function DoAndDont({ navigation }) {
  const country = navigation.getParam("country");
  const Do = data[country].Do;
  const Dont = data[country].Dont;
  return (
    <View style={styles.background}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> Do's And Don'ts </Text>
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>Do:</Text>
      </View>

      <View style={styles.do}>
        <Text style={styles.textDoDont}> {Do} </Text>
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>Don't:</Text>
      </View>

      <View style={styles.dont}>
        <Text style={styles.textDoDont}> {Dont} </Text>
      </View>
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
  titleContainer: {
    paddingTop: 40,
    paddingBottom: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dont: {
    flexShrink: 1,
    margin: 20,
    fontSize: 18,
    textAlign: "left",
    backgroundColor: "#EE9090",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
  },

  do: {
    flexShrink: 1,
    margin: 20,
    fontSize: 18,
    textAlign: "left",
    backgroundColor: "#90EE90",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
  },

  logo: {
    marginTop: 50,
    alignSelf: "center",
    width: 350,
    height: 300,
    overflow: "hidden",
  },
  textDoDont: {
    padding: 20,
  },
});
