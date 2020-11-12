// import { StatusBar } from 'expo-status-bar';
// import React , {useState} from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Icon, Button } from 'react-native-elements';
// import logo from './assets/CartEarth.png';
// import { AppLoading } from 'expo';
// import * as Font from 'expo-font';
// import Home from './screens/home';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Home from './screens/home';

// class SplashScreen extends Component {
//   render() {
//     return (
//       <View style={styles.titleScreen}>
//         <Image source={logo} style={styles.logo} />
//         <Text style = {styles.fontSizeTitle}>Let's</Text>
//         <Text style = {styles.fontSizeTitle}>Travel!</Text>
//         <StatusBar style="auto" />

//       </View>
//     );
//   }
// }

// export default function App() {
//   const getFonts = () => Font.loadAsync({
//     'rowdies': require('./assets/fonts/Rowdies-Regular.ttf')
//   });
//   const [fontLoaded, setFontsLoaded] = useState(false);
//   if (fontLoaded) {
//     return (
//       <Home />
//     )
//   } else {
//     return (
//       < AppLoading
//         startAsync={getFonts}
//         onFinish={() => setFontsLoaded = useState(true)}
//         />
//     )
//   }
//   // return (
//   //     <SplashScreen />
//   // );
// }
export default function App() {
  const getFonts = () => Font.loadAsync({
    'rowdies': require('./assets/fonts/Rowdies-Regular.ttf')
  });
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return( 
      <Home />
    )
  } else {
    return (
      < AppLoading
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
  
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

  titleScreen:{
    flex:1,
    backgroundColor: '#34526D',
    alignItems: 'center',
    fontWeight: "bold",
    justifyContent: 'center',
  },

  fontSizeTitle:{
    fontSize: 80
  }

});
