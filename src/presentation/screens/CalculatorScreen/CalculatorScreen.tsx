import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {colors, GlobalStyles} from '../../../config/theme/app-theme';
import {CalculatorButton} from '../../components';

export const CalculatorScreen = () => {

  interface ibutton {
    label: string;
    color?: string;
    style?: {
      text?: TextStyle,
      button?: ViewStyle,
    };
  }

  const typeButtons: Array<ibutton> = [
    {label: 'C',color: colors.lightGray, style: {text: {color: '#000000'}}},
    {label: '+/-', color: colors.lightGray, style: {text: {color: '#000000'}}},
    {label: 'DEL', color: colors.lightGray, style: {text: {color: '#000000'}}},
    {label: '/', color: colors.orange},

    {label: '7'},
    {label: '8'},
    {label: '9'},
    {label: 'X', color: colors.orange},

    {label: '4'},
    {label: '5'},
    {label: '6'},
    {label: '-', color: colors.orange},

    {label: '1'},
    {label: '2'},
    {label: '3'},
    {label: '+', color: colors.orange},

    {label: '0'},
    {label: '.'},
    {label: '=', color: colors.orange},
  ];

  return (
    <View style={GlobalStyles.calculatorContainer}>
      <View style={StylesCalculatorScreen.contentFather}>
        <Text style={GlobalStyles.mainResult}>1500</Text>
        <Text style={GlobalStyles.subResult}>15</Text>
      </View>

      <View
        style={{
          ...GlobalStyles.row,
          flexWrap: 'wrap',
          // backgroundColor: '#ff0000',
          gap: 10,
          justifyContent: 'space-between',
        }}>
        {typeButtons.map((data, index) => (
          <CalculatorButton key={index} label={data.label} color={data.color} style={data.style} />
        ))}
      </View>
    </View>
  );
};

const StylesCalculatorScreen = StyleSheet.create({
  contentFather: {
    // backgroundColor: 'blue',
    paddingHorizontal: 30,
    paddingBottom: 20,
  },

  componentButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
