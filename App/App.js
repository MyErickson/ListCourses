/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './Navigators/AppNavigator';
import NavigationService from './Service/NavigationService';

const App = (props) => {

  return (
    <AppNavigator 
    ref={(navigatorRef) => {
      NavigationService.setTopLevelNavigator(navigatorRef)
    }}
    />

  );
};


export default App;
