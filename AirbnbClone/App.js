/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native';

import Router from './src/navigation/router';

//1.18.51

const App = () => {
  return <Router />;
};
export default withAuthenticator(App);
