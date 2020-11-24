import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Loading from "../screens/loading";
import Home from "../screens/home";
import Currency from "../screens/currency";
import Main from "../screens/mainPage";
import POI from "../screens/pointsOfInterest";
import Safety from "../screens/safetyTips";

const screens = {
  Loading: {
    screen: Loading,
    navigationOptions: {
      headerShown: false,
    },
  },

  Main: {
    screen: Main,
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
    screen: POI,
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
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
