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
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import { Icon, Button, BottomSheet, ListItem } from "react-native-elements";
let id = 0;

// class DefaultMarkers extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       markers: [],
//     };
//   }

//   async onMapPress(e) {
//     this.setState({
//       markers: [
//         {
//           coordinate: e.nativeEvent.coordinate,
//           key: id++,
//         },
//       ],
//     });
//     Keyboard.dismiss();
//     let longitude = e.nativeEvent.coordinate["longitude"];
//     let latitude = e.nativeEvent.coordinate["latitude"];
//     const res = await fetch(
//       `http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true`
//     );
//     const body = await res.json();
//     if ("result" in body) {
//       console.log("worked");
//     } else {
//       throw body;
//     }
//     // const body = await res.json();
//     console.log(e.nativeEvent.coordinate);
//   }

//   render() {
//     return (
//       <MapView
//         style={styles.mapStyle}
//         provider={this.props.provider}
//         onPress={(e) => this.onMapPress(e)}
//       >
//         {this.state.markers.map((marker) => (
//           <Marker key={marker.key} coordinate={marker.coordinate} />
//         ))}
//       </MapView>
//     );
//   }
// }

export default function Home({ navigation }) {
  const countries = new Set(["USA", "Mexico", "Canada"]);
  const [country, setCountry] = React.useState("");
  const [text, setText] = React.useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [validCountry, setValidCountry] = useState(false);

  const list = [
    {
      title: "Currency Exchange",
      onPress: () => {
        if (validCountry) {
          setIsVisible(false);
          navigation.navigate("Currency", { country: country });
        } else {
          setCountry("Enter Above First");
          setIsVisible(false);
        }
      },
    },
    {
      title: "Point's Of Interest",
      onPress: () => {
        if (validCountry) {
          setIsVisible(false);
          navigation.navigate("POI", { country: country });
        } else {
          setCountry("Enter Above First");
          setIsVisible(false);
        }
      },
    },
    {
      title: "Safety Tips",
      onPress: () => {
        if (validCountry) {
          setIsVisible(false);
          navigation.navigate("Safety", { country: country });
        } else {
          setCountry("Enter Above First");
          setIsVisible(false);
        }
      },
    },
    {
      title: "Do's and Don'ts",
      onPress: () => {
        if (validCountry) {
          setIsVisible(false);
          navigation.navigate("DoDont", { country: country });
        } else {
          setCountry("Enter Above First");
          setIsVisible(false);
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

  const pressHandler = () => {
    setIsVisible(true);
  };

  function checkInput() {
    if (countries.has(text)) {
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
        <MapView style={styles.mapStyle} />
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
        <Text style={styles.countryText}>{country}</Text>
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
            onPress={pressHandler}
          />
        </View>
        <BottomSheet isVisible={isVisible}>
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
  mapStyle: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    flex: 1,
    flexDirection: "column",
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
  search: {
    flex: 2,
    justifyContent: "center",
    alignItems: "stretch",
  },
  text: {
    textAlign: "center",
    fontFamily: "rowdies",
    fontSize: 30,
  },
  logo: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
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
  countryText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    alignSelf: "center",
    color: "#000",
    position: "absolute",
    marginTop: 150,
    fontFamily: "rowdies",
  },
  submitButton: {
    paddingTop: 80,
    fontSize: 15,
    alignSelf: "flex-end",
    position: "absolute",
    right: 20,
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
});
