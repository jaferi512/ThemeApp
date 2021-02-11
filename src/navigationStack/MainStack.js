import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="home"
      screenOptions={{gestureEnabled: true}}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}

export {MainStack};
