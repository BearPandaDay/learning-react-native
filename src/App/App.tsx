// import './gesture-handler';
// // Only import react-native-gesture-handler on native platforms
// import 'react-native-gesture-handler';

import './gesture-handler';
import './gesture-handler.native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { Text } from 'react-native';
import { StackReactNavigator } from '../Presentation/routes/StackReactNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <StackReactNavigator />
    </NavigationContainer>
  );
};
