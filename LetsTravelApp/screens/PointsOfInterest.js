import React, { useState } from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import logo from "./assets/Temple.png";

const USAsummary = "Loresm ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper, sem vitae pharetra interdum, felis arcu porttitor nisl, ac vulputate massa diam eu neque. Quisque at ligula ac elit porttitor imperdiet. Sed in lectus interdum, aliquet metus nec, sagittis sem. Nunc pharetra a nunc sed elementum. Nam congue sollicitudin mauris, nec egestas risus pulvina.Ut tristique accumsan libero, quis vestibulum lacus fermentum ut.";

export default function SafteyTips({ navigation }) {

    const pressHandler = () => {
        navigation.navigate("Home");
      };


  return (
    <View style={styles.background}>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText} > Points of Interest </Text>
        </View>

        <View style={styles.paragraph}>
          <Text> {USAsummary} </Text>
        </View>

      <Image source={logo} style={styles.logo} />

    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'purple',
  },
  background: {
    flex: 1,
    flexDirection:'column',
    justifyContent: "flex-start",
    backgroundColor: "#34526D",
  },
  titleText: {
    height:50,
    textAlign: "center",
    fontFamily: "rowdies",
    fontSize: 40,
  },
  titleContainer: {
    paddingTop: 40,
    paddingBottom: 10,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: "center",
    justifyContent: "flex-start",
  },
  paragraph: {
    flexShrink: 1,
    margin: 20,
    fontSize: 18,
    textAlign: 'left',
    backgroundColor: 'white',
    borderStyle: 'solid',
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
});