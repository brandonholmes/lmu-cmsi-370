import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, TextInput, ViewComponent, Component} from "react-native";
import {Button } from "react-native-elements";
import { SearchBar } from "react-native-elements";



const USAsummary = "Loresm ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper, sem vitae pharetra interdum, felis arcu porttitor nisl, ac vulputate massa diam eu neque. Quisque at ligula ac elit porttitor imperdiet. Sed in lectus interdum, aliquet metus nec, sagittis sem. Nunc pharetra a nunc sed elementum. Nam congue sollicitudin mauris, nec egestas risus pulvina.Ut tristique accumsan libero, quis vestibulum lacus fermentum ut.";

const USAlodging = "Quis vestibulum lacus fermentum ut. Etiam enim leo, lobortis in risus ac, fringilla fringilla orci. Cras non sagittis nulla, at eleifend arcu. Nam imperdiet ex id elit ultrices, quis gravida metus elementum. Vivamus ante elit, rhoncus at congue non, posuere a magna."

export default function SafteyTips({ navigation }) {

    const pressHandler = () => {
        navigation.navigate("Home");
      };


  return (
    <View style={styles.background}>

        <View style={styles.titleContainer}>
            <Text style={styles.titleText} > Saftey Tips </Text>
        </View>

        <View style={styles.paragraph}>
            <Text> {USAsummary} </Text>
        </View>

        <Text style={styles.title02}>
            Recommended Modes Of Transport
        </Text>


        <View style={styles.bulletParagraph}>

            <View style={ styles.row }>
                <View style={ styles.bullet }>
                    <Text>{'\u2022' + " "}</Text>
                </View>
                <View style={ styles.bulletText }>
                    <Text>Train</Text>
                </View>
            </View>
        
            <View style={ styles.row }>
                <View style={ styles.bullet }>
                    <Text>{'\u2022' + " "}</Text>
                </View>
                <View style={ styles.bulletText }>
                    <Text>Cab</Text>
                </View>
            </View>

            <View style={ styles.row }>
                <View style={ styles.bullet }>
                    <Text>{'\u2022' + " "}</Text>
                </View>
                <View style={ styles.bulletText }>
                    <Text>Rental Car</Text>
                </View>
            </View>

        </View>


        <Text style={styles.title03}>
            Lodging
        </Text>
        <View style={styles.paragraph02}>
            
            <Text> {USAlodging} </Text>
        </View>


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

  title02: {
    fontSize:20,
    fontFamily: "rowdies",
    paddingLeft:20,
    textAlign: "left",
 
  },
  title03: {
    fontSize:20,
    fontFamily: "rowdies",
    paddingLeft:20,
    textAlign: "left",
 
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
    paragraph02: {
        flexShrink: 1,
        margin: 10,
        fontSize: 18,
        textAlign: 'left',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 8,
      },

      bulletParagraph:{
        paddingTop:10,
        alignContent:'center',
        alignItems:'center',
        
      },
      row: {
        flexDirection:"row",
        alignItems: 'center',
        
      },
      bullet: {
         
        width: 10
      },
      bulletText: {
       
      },
  
});









