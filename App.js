/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { Provider } from 'react-redux'
import store from './src/redux/store'
import AppNav from './src/navigation/AppNav'

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
};

export default App;
