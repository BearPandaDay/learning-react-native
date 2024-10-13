import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../../config/theme/app-theme';

export const CalculatorScreen = () => {
  return (
    <View style={GlobalStyles.calculatorContainer}>
      <View style={StylesCalculatorScreen.contentFather}>
        <Text style={GlobalStyles.mainResult}>1500</Text>
        <Text style={GlobalStyles.subResult}>15</Text>
      </View>

      <View style={GlobalStyles.row}>
        <Pressable style={GlobalStyles.button}>
          <Text style={GlobalStyles.buttonText}>1</Text>
        </Pressable>
        <Pressable style={GlobalStyles.button}>
          <Text style={GlobalStyles.buttonText}>2</Text>
        </Pressable>
        <Pressable style={GlobalStyles.button}>
          <Text style={GlobalStyles.buttonText}>3</Text>
        </Pressable>
        <Pressable style={GlobalStyles.button}>
          <Text style={GlobalStyles.buttonText}>4</Text>
        </Pressable>
      </View>
    </View>
  );
};

const StylesCalculatorScreen = StyleSheet.create({
  contentFather: {paddingHorizontal: 30, paddingBottom: 20},

  componentButtons: {
    flexDirection: 'row',
  },
});
