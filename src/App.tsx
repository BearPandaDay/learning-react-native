import React from 'react';
import { StatusBar, View } from 'react-native';
import { GlobalStyles } from './config/theme/app-theme';
import { CalculatorScreen } from './presentation/screens';

export const App = () => {
  return (
    <View style={GlobalStyles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000000'}/>
      <CalculatorScreen />
    </View>
  );
};
