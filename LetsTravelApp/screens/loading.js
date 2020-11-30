import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon, Button } from "react-native-elements";

export default function Loading({ navigation }) {
  const goHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Let's Travel</Text>
        <Text>
          <Icon name="plane" type="font-awesome" color="black" size={102} />
        </Text>
        <Button title="Start" onPress={goHome} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34526D",
  },
  titleText: {
    textAlign: "center",
    fontFamily: "rowdies",
    fontSize: 50,
  },
  titleContainer: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontFamily: "rowdies",
    paddingTop: 20,
    textAlign: "center",
    flex: 10,
  },
});
