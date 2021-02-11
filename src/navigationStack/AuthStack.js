import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Login, SignUp} from '../screens';

const Stack = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{gestureEnabled: true}}
      tabBarOptions={{
        style: {
          backgroundColor: '#101820FF',
        },
        activeTintColor: 'orange',
        inactiveTintColor: '#FFF',
      }}>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({color, size}) => (
            <Icon name="key" color={color} size={size} />
          ),
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{
          tabBarLabel: 'SignUp',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export {AuthStack};
