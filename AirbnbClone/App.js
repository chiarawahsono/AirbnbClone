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
// import HomeScreen from './src/screens/Home';
// import Post from './src/components/Post';
// import feed from './assets/data/feed';
// import SearhResultsScreen from './src/screens/SearchResults';
// import LocationSearchScreen from './src/screens/LocationSearch';
// import GuestsScreen from './src/screens/Guests';
// const post1 = feed[0];
// const post2 = feed[1];
// const post3 = feed[2];
import Router from './src/navigation/router';

const App = () => {
  return <Router />;
};

export default App;
