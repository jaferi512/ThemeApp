import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const FilledInput = ({place}) => {
  return (
    <View>
      <TextInput
        style={{
          backgroundColor: '#D3D3D3',
          padding: 15,
          margin: 5,
          borderRadius: 20,
        }}
        placeholder={place}
      />
    </View>
  );
};

export {FilledInput};

const styles = StyleSheet.create({});
