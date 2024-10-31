import React from 'react';
import { Pressable, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface iProps {
  onPress: () => void,
  label: string
}

export const PrimaryButton = (props: iProps) => {
  const { onPress, label } = props;

  return (
    <Pressable
      onPress={onPress}
      style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{ label }</Text>
    </Pressable>
  );
};
