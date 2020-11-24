import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Loading from "../screens/loading";
import Home from "../screens/home";
import Main from "../screens/mainPage";
import SafteyTips from "../screens/safteyTips";
import PointsOfInterest from "../screens/pointsOfInterest"

const screens = {
  
  Loading: {
    screen: Loading,
    navigationOptions: {
      headerShown: false,
    },
  },

  Main: {
    screen: Main,
    headerShown: false,
    navigationOptions: {
      headerShown: false,
    },
  },

  Home: {
    screen: Home,
    headerShown: false,
    navigationOptions: {
      headerShown: false,
    },
  },

  SafteyTips: {
    screen: SafteyTips,
    headerShown: false,
    navigationOptions: {
      headerShown: false,
    },
  },

  PointsOfInterest: {
    screen: PointsOfInterest,
    headerShown: true,
    navigationOptions: {
      headerShown: true,
    }
  }

};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
