import React from 'react';
import {AppRegistry} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import LocationSearchScreen from '../screens/LocationSearch';
import GuestsScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

const router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Location Search'}
          component={LocationSearchScreen}
          options={{
            title: 'Search your destination',
          }}
        />

        <Stack.Screen
          name={'Guests'}
          component={GuestsScreen}
          options={{
            title: 'How many people?',
          }}
        />

        <Stack.Screen
          name={'Post'}
          component={PostScreen}
          options={{
            title: 'Accomdation',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default router;
