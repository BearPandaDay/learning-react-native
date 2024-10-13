import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../../config/theme/app-theme';
import { CalculatorButton } from '../../components';

export const CalculatorScreen = () => {
    const typeButtons: Array<string> = [
        'C',
        '+/-',
        'del',
        '/',
    ];

  return (
    <View style={GlobalStyles.calculatorContainer}>
      <View style={StylesCalculatorScreen.contentFather}>
        <Text style={GlobalStyles.mainResult}>1500</Text>
        <Text style={GlobalStyles.subResult}>15</Text>
      </View>

      <View style={GlobalStyles.row}>
        {typeButtons.map((data, index) => <CalculatorButton key={index} label={data} />)}
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
