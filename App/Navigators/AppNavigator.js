import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Pages/Screen 

import Home from '../Components/Home/Home'

import { Dimensions } from 'react-native';

const screen = Dimensions.get("window");

const MainNavigator = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteName:'Home',
    headerMode: 'none',
  }
);


const AppNavigator = createAppContainer(MainNavigator );

export default AppNavigator;
