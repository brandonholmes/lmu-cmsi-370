import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon, Button, BottomSheet, ListItem } from "react-native-elements";

export default function Loading({ navigation }) {
  // const [isVisible, setIsVisible] = useState(false);
  // const list = [
  //   { title: 'List Item 1' },
  //   { title: 'List Item 2' },
  //   {
  //     title: 'Cancel',
  //     containerStyle: { backgroundColor: 'red' },
  //     titleStyle: { color: 'white' },
  //     onPress: () => setIsVisible(false),
  //   },
  // ];

  const goHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.background}>
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
  background: {
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
