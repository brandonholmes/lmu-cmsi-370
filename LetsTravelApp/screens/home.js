import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import MapView from "react-native-maps"; // Used React Native UI library called React Native MapView, for map
import { Icon, Button, BottomSheet, ListItem } from "react-native-elements";
import { data } from "./countryData";

export default function Home({ navigation }) {
  const [countryOfTravel, setCountry] = useState("");
  const [text, setText] = useState("");
  const [isBottomSheetVisible, setBottomSheetIsVisible] = useState(false);
  const [validCountry, setValidCountry] = useState(false);

  // Lists all the items on the navigation bar to navigate to different areas.
  const list = [
    {
      title: "Currency Exchange",
      onPress: () => {
        if (validCountry) {
          setBottomSheetIsVisible(false);
          navigation.navigate("Currency", { country: countryOfTravel });
        } else {
          setCountry("Enter Above First");
          setBottomSheetIsVisible(false);
        }
      },
    },
    {
      title: "Points Of Interest",
      onPress: () => {
        if (validCountry) {
          setBottomSheetIsVisible(false);
          navigation.navigate("POI", { country: countryOfTravel });
        } else {
          setCountry("Enter Above First");
          setBottomSheetIsVisible(false);
        }
      },
    },
    {
      title: "Safety Tips",
      onPress: () => {
        if (validCountry) {
          setBottomSheetIsVisible(false);
          navigation.navigate("Safety", { country: countryOfTravel });
        } else {
          setCountry("Enter Above First");
          setBottomSheetIsVisible(false);
        }
      },
    },
    {
      title: "Do's and Don'ts",
      onPress: () => {
        if (validCountry) {
          setBottomSheetIsVisible(false);
          navigation.navigate("DoDont", { country: countryOfTravel });
        } else {
          setCountry("Enter Above First");
          setBottomSheetIsVisible(false);
        }
      },
    },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "red" },
      titleStyle: { color: "white" },
      onPress: () => setIsVisible(false),
    },
  ];

  // Sets the bottom sheet to be visible when the navButton is pressed
  const pressNavHandler = () => {
    setBottomSheetIsVisible(true);
  };

  // Checks to see if the search bar input is valid before moving on
  function checkInput() {
    if (text in data) {
      setCountry(text);
      setValidCountry(true);
    } else {
      setCountry("Invalid Country");
      setValidCountry(false);
    }
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <MapView style={styles.mapStyle} onPress={Keyboard.dismiss} />
        <Text style={styles.titleText}>Search your Destination</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Country"
          onChangeText={(text) => setText(text)}
          clearButtonMode="while-editing"
          clearTextOnFocus={true}
        />
        <View style={styles.submitButton}>
          <Button type="solid" title="Submit" onPress={checkInput} />
        </View>
        <Text style={styles.displayCountryText}>{countryOfTravel}</Text>
        <View style={styles.navButton}>
          <Button
            icon={
              <Icon name="bars" type="font-awesome" color="black" size={40} />
            }
            linearGradientProps={{
              colors: ["white", "white"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            borderRadius={20}
            onPress={pressNavHandler}
          />
        </View>
        <BottomSheet isVisible={isBottomSheetVisible}>
          {list.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={l.containerStyle}
              onPress={l.onPress}
            >
              <ListItem.Content>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  mapStyle: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    width: 300,
    height: 60,
    alignSelf: "center",
    color: "#000",
    position: "absolute",
    marginTop: 50,
    fontFamily: "rowdies",
  },
  textInput: {
    textAlign: "center",
    width: 250,
    height: 40,
    alignSelf: "flex-start",
    color: "#000",
    position: "absolute",
    marginTop: 80,
    backgroundColor: "#FFF",
    marginLeft: 20,
  },
  submitButton: {
    paddingTop: 80,
    fontSize: 15,
    alignSelf: "flex-end",
    position: "absolute",
    right: 20,
  },
  displayCountryText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    alignSelf: "center",
    color: "#000",
    position: "absolute",
    marginTop: 150,
    fontFamily: "rowdies",
  },
  navButton: {
    position: "absolute",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    color: "#fff",
    bottom: "20%",
    right: "43%",
  },
});
