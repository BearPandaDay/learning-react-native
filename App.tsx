import React, { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import { CounterScreen, HelloWorldScreen } from './src/presentation/screens';

export const App = () => {
  const colorScheme = useColorScheme();

  const [isDark, setIsDark] = useState<boolean>(false);
  const [color, setColor] = useState<string>('#000000');
  const [backgroundcolor, setBackgroundColor] = useState<string>('#ffffff');

  const getColorSchema = (): boolean => {
    const responseIsDark: boolean = colorScheme === 'dark';
    return responseIsDark;
  };

  const funcSetIsDark = (data: boolean) => {
    setIsDark(data);
  };

  const funcSetValueBackgroundColor = () => {
    isDark ? setBackgroundColor('#000000') : setBackgroundColor('#ffffff');
  };

  useEffect(() => {
    const responseGetColorSchema = getColorSchema();
    funcSetIsDark(responseGetColorSchema);
    funcSetValueBackgroundColor();
    funcSetValueColorLetter();
  });

  const funcSetValueColorLetter = () => {
    isDark ? setColor('#ffffff') : setColor('#000000');
  };

  return (
    <SafeAreaView style={{...styles.styleSafeAreaView, backgroundColor: backgroundcolor}}>
      {/* <HelloWorldScreen name="Luis Alfredo de la Ossa Diaz" style={{...styles, styleText: [styles.styleText, {color}]}}/> */}
      <CounterScreen style={{...styles, styleText: [styles.styleText, {color}]}}/>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  styleSafeAreaView: {
    minHeight: '100%',
    minWidth: '100%',
  },
  styleView: {
    minWidth: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleText: {
    fontSize: 48,
  },
  buttonPressable: {
    backgroundColor: Platform.OS === 'ios' ? 'rgba(196, 196, 196, 0)' : 'rgb(0, 93, 187)',
    borderRadius: 100 * 0.12,
    minWidth: 80,
  },

  textButton: {
    color: Platform.OS === 'ios' ? 'rgb(39, 143, 255)' : 'rgb(255, 255, 255)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontSize: 30,
  },

  buttonPressed: {
    backgroundColor: 'rgb(0, 75, 149)',
    borderRadius: 100 * 0.12,
    minWidth: 80,
  },
});
