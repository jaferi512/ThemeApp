import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../redux/authReducer';
import {incre} from '../redux/countReducer';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

function Home({navigation}) {
  const count = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();
  const addNote = () => dispatch(logout());
  const increment = () => dispatch(incre());

  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{
            height: '8%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Text>Structure Header</Text>
        </View>
        <ScrollView style={{flex: 1, backgroundColor: 'lightgreen'}}>
          <View style={{width: '45%', alignSelf: 'center'}}>
            <View
              style={{
                width: '95%',
                height: 250,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf:'center',
              }}>
              <Text style={{textAlign: 'center', fontSize: 18}}>
                Welcome to React Native Structure Application.
              </Text>
            </View>
            <TouchableOpacity
              style={{
                padding: 20,
                backgroundColor: 'white',
                margin: 10,
                borderRadius: 30,
                alignItems: 'center',
              }}
              onPress={() => {
                increment();
              }}>
              <Text>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 20,
                backgroundColor: 'white',
                margin: 10,
                borderRadius: 30,
                alignItems: 'center',
              }}
              onPress={() => {
                addNote();
              }}>
              <Text>Logout</Text>
            </TouchableOpacity>
            <Text style={{textAlign: 'center'}}>{count}</Text>
          </View>
        </ScrollView>
        <View
          style={{
            height: '8%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Text>Structure Footer</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10,
  },
  listTitle: {
    fontSize: 20,
  },
});

export {Home};
