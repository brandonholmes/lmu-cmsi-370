/* 
The homeStack.js will put all the screens into one navigation
stack, to be used throughout the app, by navigating to
differnet parts of application, like going back home or going
to currency exchange.  Imported into App.js to use.
*/

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// Importing all screens to put into navigation stack
import Loading from "../screens/loading";
import Home from "../screens/home";
import Currency from "../screens/currency";
import PointOfInterest from "../screens/pointsOfInterest";
import Safety from "../screens/safetyTips";
import DoDont from "../screens/doDont";

const screens = {
  Loading: {
    screen: Loading,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Currency: {
    screen: Currency,
    navigationOptions: {
      headerShown: true,
      title: "",
      headerStyle: {
        backgroundColor: "#34526D",
        shadowColor: "transparent",
      },
      headerTintColor: "#fff",
      headerBackTitle: "Back",
    },
  },
  POI: {
    screen: PointOfInterest,
    navigationOptions: {
      headerShown: true,
      title: "",
      headerStyle: {
        backgroundColor: "#34526D",
        shadowColor: "transparent",
      },
      headerTintColor: "#fff",
      headerBackTitle: "Back",
    },
  },
  Safety: {
    screen: Safety,
    navigationOptions: {
      headerShown: true,
      title: "",
      headerStyle: {
        backgroundColor: "#34526D",
        shadowColor: "transparent",
      },
      headerTintColor: "#fff",
      headerBackTitle: "Back",
    },
  },
  DoDont: {
    screen: DoDont,
    navigationOptions: {
      headerShown: true,
      title: "",
      headerStyle: {
        backgroundColor: "#34526D",
        shadowColor: "transparent",
      },
      headerTintColor: "#fff",
      headerBackTitle: "Back",
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
