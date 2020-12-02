import React, { useState, useRef, Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Linking,
} from "react-native";
import MapView from "react-native-maps"; // Used React Native UI library called React Native MapView, for map
import { Icon, Button } from "react-native-elements";
import { data } from "./countryData";
import {countryCapitals} from "./CountryCapitials";
import RBSheet from "react-native-raw-bottom-sheet";



export default function Home({ navigation }) {
  const refRBSheet = useRef();
  const [countryOfTravel, setCountry] = useState("");
  const [text, setText] = useState("");
  const [validCountry, setValidCountry] = useState(false);

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

  class SubmitUserCountryQuery extends Component{

    render(){
      return (
        
        <View style={styles.submitButton}>
        <Button type="solid" title="Submit" onPress={checkInput} />
        </View>
      )
    }
  }

  class MenuNavigationTopRow extends Component{

    render (){
      return (

      <View style={styles.buttonFormatInNav}>
        <TouchableOpacity
          onPress={() => {
            if (validCountry) {
              navigation.navigate("Currency", { country: countryOfTravel });
            } else {
              setCountry("Enter Above First");
            }
            refRBSheet.current.close();
          }}
          style={styles.buttonInNav}
        >
          <Text>
            <Icon
              name="credit-card"
              type="font-awesome"
              color="black"
              size={40}
            />
          </Text>





          
          <Text style={styles.buttonTitleInNav}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (validCountry) {
              navigation.navigate("Safety", { country: countryOfTravel });
            } else {
              setCountry("Enter Above First");
            }
            refRBSheet.current.close();
          }}
          style={styles.buttonInNav}
        >
          <Text>
            <Icon
              name="info-circle"
              type="font-awesome"
              color="black"
              size={40}
            />
          </Text>
          <Text style={styles.buttonTitleInNav}>Safety Tips</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (validCountry) {
              navigation.navigate("DoDont", { country: countryOfTravel });
            } else {
              setCountry("Enter Above First");
            }
            refRBSheet.current.close();
          }}
          style={styles.buttonInNav}
        >
          <Text>
            <Icon
              name="check-square"
              type="font-awesome"
              color="black"
              size={40}
            />
          </Text>
          <Text style={styles.buttonTitleInNav}>Do's and Don'ts</Text>
        </TouchableOpacity>

      </View>

      )
    }

  }
  
  class MenuNavigationBottomRow extends Component {
    render(){
      return (
        <View style={styles.buttonFormatInNav}>
            <TouchableOpacity
              onPress={() => {
                if (validCountry) {
                  navigation.navigate("POI", { country: countryOfTravel });
                } else {
                  setCountry("Enter Above First");
                }
                refRBSheet.current.close();
              }}
              style={styles.buttonInNav}
            >
              <Text>
                <Icon
                  name="map-pin"
                  type="font-awesome"
                  color="black"
                  size={40}
                />
              </Text>
              <Text style={styles.buttonTitleInNav}>Points of Interest</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://translate.google.com/");
              }}
              style={styles.buttonInNav}
            >
              <Text>
                <Icon
                  name="language"
                  type="font-awesome"
                  color="black"
                  size={40}
                />
              </Text>
              <Text style={styles.buttonTitleInNav}>Translate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (validCountry) {
                  navigation.navigate("Trans", { country: countryOfTravel });
                } else {
                  setCountry("Enter Above First");
                }
                refRBSheet.current.close();
              }}
              style={styles.buttonInNav}
            >
              <Text>
                <Icon
                  name="train"
                  type="font-awesome"
                  color="black"
                  size={40}
                />
              </Text>
              <Text style={styles.buttonTitleInNav}>Transport</Text>
            </TouchableOpacity>
          </View>
      )
    }

  }



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <MapView style={styles.mapStyle} onPress={Keyboard.dismiss} >

        </MapView>
        <Text style={styles.titleText}>Search your Destination</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Country"
          onChangeText={(text) => setText(text)}
          clearButtonMode="while-editing"
          clearTextOnFocus={true}
        />
        <SubmitUserCountryQuery> </SubmitUserCountryQuery>
        <Text style={styles.displayCountryText}>{countryOfTravel}</Text>
        <View style={styles.navButtonLocation}>
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.open();
            }}
            style={styles.navButton}
          >
            <Text>
              <Icon name="bars" type="font-awesome" color="white" size={40} />
            </Text>
          </TouchableOpacity>
        </View>
        <RBSheet
          ref={refRBSheet}
          height={400}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
        <MenuNavigationTopRow></MenuNavigationTopRow>
        <MenuNavigationBottomRow></MenuNavigationBottomRow>
          
        </RBSheet>
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
    width: 70,
    height: 70,
    backgroundColor: "#1976D2",
    alignItems: "center",
    paddingTop: 5,
    borderRadius: 70 / 2,
    margin: 20,
    justifyContent: "space-around",
  },
  navButtonLocation: {
    position: "absolute",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    color: "#fff",
    bottom: "5%",
    left: "5%",
  },

  buttonInNav: {
    width: 100,
    height: 100,
    backgroundColor: "#00FFC2",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 50,
    margin: 10,
    borderRadius: 20,
  },
  buttonTitleInNav: {
    color: "black",
    fontSize: 19,
    textAlign: "center",
    fontFamily: "rowdies",
  },
  buttonFormatInNav: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
