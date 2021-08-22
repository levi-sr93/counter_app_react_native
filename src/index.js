/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './redux/store';

import Routes from './navigation/routes';
import Colors from './utils/constants';

export const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.LightBlue,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={appTheme}>
        <StatusBar barStyle="light-content" />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
