import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const FilledButton = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          padding: 20,
          backgroundColor: '#1C1C1BFF',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
          margin:5
        }}>
        <Text style={{color: 'white'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export {FilledButton};

const styles = StyleSheet.create({});
