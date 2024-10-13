import React from 'react'
import { Pressable, Text } from 'react-native';
import { GlobalStyles } from '../../../config/theme/app-theme';

interface props {
    label: string;
}

export const CalculatorButton = ({
    label,
}:props) => {
  return (
    <Pressable style={GlobalStyles.button}>
      <Text style={GlobalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};

