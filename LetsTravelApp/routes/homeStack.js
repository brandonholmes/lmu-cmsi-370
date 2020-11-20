import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Loading from "../screens/loading";
import Home from "../screens/home";

const screens = {
  Loading: {
    screen: Loading,
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
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
