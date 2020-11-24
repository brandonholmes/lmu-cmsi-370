import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Loading from "../screens/loading";
import Home from "../screens/home";
import Main from "../screens/mainPage";
import SafteyTips from "../screens/safteyTips";
import DoAndDont from "../screens/DoAndDont";

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

  DoAndDont: {
    screen: DoAndDont,
    headerShown: false,
    navigationOptions: {
      headerShown: false,
    },
  }

};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
