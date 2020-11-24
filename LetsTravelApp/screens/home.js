import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, TextInput } from "react-native";
import { SearchBar } from "react-native-elements";
import MapView from "react-native-maps";

export default function Home({ navigation }) {
  const [text, setText] = React.useState("");
  //   state = {
  //     search: "",
  //   };

  //   updateSearch = (search) => {
  //     this.setState({ search });
  //   };
  //   const { search } = this.state;

  function SwitchScreens(text) {
    if(text === "USA"){
      navigation.navigate("DoAndDont");
      console.log("On your way to the USA Saftey");
    }
 }

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} />
      <Text style={styles.baseText}>Search your Destination</Text>
      <TextInput
        style={styles.textInput}
        inlineImageLeft="search_icon"
        placeholder="Country"
        onChangeText={SwitchScreens}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
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