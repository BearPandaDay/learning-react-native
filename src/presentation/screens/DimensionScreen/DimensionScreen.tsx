import React from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import {View} from 'react-native';

export const DimensionScreen = () => {
  const dimentionHook = useWindowDimensions();
  const {width, height} = dimentionHook;

  const stylesDimensionScreen = StylesDimensionScreen();

  return (
    <>
    <View style={stylesDimensionScreen.container}>
      <View style={{...stylesDimensionScreen.purpleBox, width: width * 0.8}} />
    </View>
    <Text>Jurgo</Text>
    </>
  );
};

const StylesDimensionScreen = () => {
  return StyleSheet.create({
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
};

