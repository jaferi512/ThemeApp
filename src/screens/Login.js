import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {useSelector, useDispatch} from 'react-redux';
import {change} from '../redux/themeReducer';
import { useTheme } from '@react-navigation/native';
const Login = () => {
  const { colors } = useTheme();
  let currentTheme = useSelector(state=>{
    return state.myDarMode
  });
  const dispatch = useDispatch();
  return (
    <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:colors.background}}>
      <View style={{height:50,width:'50%',backgroundColor:'green',justifyContent:'center', alignItems:'center'}}>
        <Text style={{textAlign:'center',color:'white'}}>Welcome to Theme Change Check Components</Text>
      </View>
      <Text>Login Component</Text>
      <TouchableOpacity onPress={()=>dispatch(change(currentTheme))} style={{padding:20,backgroundColor:'tomato'}}>
        <Text>Change Theme</Text>
      </TouchableOpacity>
    </View>
  )
}

export {Login};

const styles = StyleSheet.create({})
