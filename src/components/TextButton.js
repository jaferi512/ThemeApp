import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TextButton = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export {TextButton};

const styles = StyleSheet.create({});
