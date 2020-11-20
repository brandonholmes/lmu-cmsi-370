import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import Navigator from "./routes/homeStack";

export default function App() {
  const getFonts = () =>
    Font.loadAsync({
      rowdies: require("./assets/fonts/Rowdies-Regular.ttf"),
    });
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
