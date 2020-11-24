import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Loading from "../screens/loading";
import Home from "../screens/home";
import Main from "../screens/mainPage";
import SafteyTips from "../screens/safteyTips";
<<<<<<< HEAD
import DoAndDont from "../screens/DoAndDont";
=======
import PointsOfInterest from "../screens/pointsOfInterest"
>>>>>>> 73a53e59ff82b3c89f3c58fb84cae11acb36155a

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

<<<<<<< HEAD
  DoAndDont: {
    screen: DoAndDont,
    headerShown: false,
    navigationOptions: {
      headerShown: false,
    },
=======
  PointsOfInterest: {
    screen: PointsOfInterest,
    headerShown: true,
    navigationOptions: {
      headerShown: true,
    }
>>>>>>> 73a53e59ff82b3c89f3c58fb84cae11acb36155a
  }

};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
