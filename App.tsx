import React, { useEffect, useState } from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import {
  CounterScreen,
  // HelloWorldScreen
} from './src/presentation/screens';
import { StylesApp } from './App/';
import { Isdark } from './src/utils';

export const App = () => {
  const isDark = Isdark();

  const stylesApp = StylesApp();
  const [color, setColor] = useState<string>('#000000');
  // const colorScheme = useColorScheme();

  // const [isDark, setIsDark] = useState<boolean>(false);
  // const [backgroundcolor, setBackgroundColor] = useState<string>('#ffffff');

  // const getColorSchema = (): boolean => {
  //   const responseIsDark: boolean = colorScheme === 'dark';
  //   return responseIsDark;
  // };

  // const funcSetIsDark = (data: boolean) => {
  //   setIsDark(data);
  // };

  // const funcSetValueBackgroundColor = () => {
  //   isDark ? setBackgroundColor('#000000') : setBackgroundColor('#ffffff');
  // };

  useEffect(() => {
    // const responseGetColorSchema = getColorSchema();
    // funcSetIsDark(responseGetColorSchema);
    // funcSetValueBackgroundColor();
    funcSetValueColorLetter();
  });

  const funcSetValueColorLetter = () => {
    isDark ? setColor('#ffffff') : setColor('#000000');
  };

  return (
    <SafeAreaView style={{...stylesApp.styleSafeAreaView}}>
      {/* <HelloWorldScreen name="Luis Alfredo de la Ossa Diaz" style={{...styles, styleText: [styles.styleText, {color}]}}/> */}
      <CounterScreen style={{...stylesApp, styleText: [stylesApp.styleText, {color}]}}/>
    </SafeAreaView>
  );
};
