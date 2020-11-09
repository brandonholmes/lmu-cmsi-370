import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';



class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.titleScreen}>
        <Text>Let's</Text>
        <Text>Travel!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}





export default function App() {
  return (
      <SplashScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleScreen:{
    flex:1,
    backgroundColor: '#34526D',
    alignItems: 'center',
    fontSize: 50,
    fontWeight: "bold",
    justifyContent: 'center',
  },


});


