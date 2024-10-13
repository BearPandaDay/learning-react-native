import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GlobalStyles } from '../../../config/theme/app-theme';

export const CalculatorScreen = () => {
  return (
    <View style={GlobalStyles.calculatorContainer}>
      <View style={StylesCalculatorScreen.contentFather}>
        <Text style={GlobalStyles.mainResult}>1500</Text>
        <Text style={GlobalStyles.subResult}>15</Text>
      </View>
    </View>
  );
};

const StylesCalculatorScreen = StyleSheet.create({
  contentFather: {paddingHorizontal: 30, paddingBottom: 20},
});
