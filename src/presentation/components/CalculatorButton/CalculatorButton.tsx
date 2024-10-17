import React from 'react';
import {Pressable, Text} from 'react-native';
import {colors, GlobalStyles} from '../../../config/theme/app-theme';

interface props {
  label: string;
  color?: string;
  style?: {
    button?: object;
    text?: object;
  };
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  style,
  onPress,
}: props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        GlobalStyles.button,
        style?.button,
        {
          backgroundColor: color,
          opacity: pressed ? 0.8 : 1,
        },
      ]}>
      <Text style={[GlobalStyles.buttonText, style?.text]}>{label}</Text>
    </Pressable>
  );
};
