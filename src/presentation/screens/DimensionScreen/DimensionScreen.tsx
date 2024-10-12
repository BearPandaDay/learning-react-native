import React from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import {View} from 'react-native';

export const DimensionScreen = () => {
  const dimentionHook = useWindowDimensions();
  const {width, height} = dimentionHook;

  return (
    <>
    <View style={StylesDimensionScreen.container}>
      <View style={{...StylesDimensionScreen.purpleBox, width: width * 0.8}} />
    </View>
    <Text>Jurgo</Text>
    </>
  );
};

const StylesDimensionScreen = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '50%',
    height: '50%',
  },
  purpleBox: {
    backgroundColor: 'purple',
    width: '50%',
    height: '50%',
  },
});
