import React from 'react';
import { StyleSheet } from 'react-native';
import {View, Text} from 'react-native';

export const BoxObjectModel = () => {

  return (
    <View style={StylesBoxObjectModel.container}>
      <Text>HOLA MUNDO</Text>
    </View>
  );
};

const StylesBoxObjectModel = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
});
