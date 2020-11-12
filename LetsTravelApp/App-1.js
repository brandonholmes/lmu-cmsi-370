import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/CartEarth.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}> 
	Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    //width: '100%',
    height: '100%',
    position: 'absolute', 
    left: 200, 
  },
  instructions: {
    color: '#000', 
    fontSize: 24,
    marginHorizontal: 20,
  },
});
