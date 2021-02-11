import React, {useState} from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from './../../src/screens/Login';
import {useSelector, useDispatch} from 'react-redux';
import {Light,Dark} from '../themes/ThemeConstants';
const Stack = createStackNavigator();
const AppNav = () => {
    let currentTheme = useSelector(state=>{
        return state.myDarMode
      })
    return (
        <NavigationContainer theme={currentTheme?Dark:Light}>
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default AppNav
