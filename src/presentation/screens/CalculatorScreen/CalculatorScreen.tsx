import React from 'react';
import { Platform, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {colors, GlobalStyles} from '../../../config/theme/app-theme';
import {CalculatorButton} from '../../components';
import { useCalculator } from '../../hooks';

interface ibutton {
  label: string;
  color?: string;
  style?: {
    text?: TextStyle,
    button?: ViewStyle,
  };
  onPress: () => void;
}

export const CalculatorScreen = () => {
  const {
    number,
    previewNumber,
    buildNumberString,
    clean,
    fundel,
    toggleSign,
    divideOperator,
    multiplyOperator,
    addOperator,
    substractOperator,
    calculateOperation,
  } = useCalculator();

  const typeButtons: Array<ibutton> = [
    {onPress: clean, label: 'C',color: colors.lightGray, style: {text: {color: '#000000'}}},
    {onPress: toggleSign, label: '+/-', color: colors.lightGray, style: {text: {color: '#000000'}}},
    {onPress: fundel, label: 'DEL', color: colors.lightGray, style: {text: {color: '#000000'}}},
    {onPress: divideOperator, label: '÷', color: colors.orange},

    {onPress: () => (buildNumberString('7')), label: '7'},
    {onPress: () => (buildNumberString('8')), label: '8'},
    {onPress: () => (buildNumberString('9')), label: '9'},
    {onPress: multiplyOperator, label: '×', color: colors.orange},

    {onPress: () => (buildNumberString('4')), label: '4'},
    {onPress: () => (buildNumberString('5')), label: '5'},
    {onPress: () => (buildNumberString('6')), label: '6'},
    {onPress: substractOperator, label: '-', color: colors.orange},

    {onPress: () => (buildNumberString('1')), label: '1'},
    {onPress: () => (buildNumberString('2')), label: '2'},
    {onPress: () => (buildNumberString('3')), label: '3'},
    {onPress: addOperator, label: '+', color: colors.orange},

    {onPress: () => (buildNumberString('0')), label: '0', style: {button:{width: (Platform.OS === 'ios' ? 180 : 190)}}},
    {onPress: () => (buildNumberString('.')), label: '.'},
    {onPress: calculateOperation, label: '=', color: colors.orange},
  ];

  return (
    <View style={GlobalStyles.calculatorContainer}>
      <View style={StylesCalculatorScreen.contentFather}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={GlobalStyles.mainResult}>{number}</Text>
        {previewNumber !== '0' ? <Text adjustsFontSizeToFit numberOfLines={1} style={GlobalStyles.subResult}>{ previewNumber }</Text> : <></>}
      </View>

      <View
        style={{
          ...GlobalStyles.row,
          ...StyleSheet.create({
            next: {
              flexWrap: 'wrap',
              // backgroundColor: '#ff0000',
              gap: 10,
              justifyContent: 'space-between',
            },
          }).next,
        }}>
        {typeButtons.map((data, index) => (
          <CalculatorButton key={index} onPress={data.onPress} label={data.label} color={data.color} style={data.style} />
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
