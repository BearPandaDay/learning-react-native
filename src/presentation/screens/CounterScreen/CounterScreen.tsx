import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {View, Text, Pressable} from 'react-native';
import { StylesButton } from '../../../styles';

interface properties {
  children: any;
  style: istyles;
  name?: string;
}

interface istyles {
  styleSafeAreaView: object,
  styleView: object,
  styleText: object,
  // buttonPressable: object,
  // textButton: object,
  // buttonPressed: object,
}

export const CounterScreen = (props: properties) => {
    const {children, style} = props;

    const stylesButton = StylesButton();

    const [number, setNumber] = useState(0);

    function onPressIncreseDecrese(value: number): void {
      setNumber(prev => prev + value);
    }

  return (
    <View style={style.styleView}>
      <Text style={style.styleText}>{number}</Text>
      {children}
      <Pressable onPress={() => onPressIncreseDecrese(1)} onLongPress={() => setNumber(0)} style={({pressed}) => [stylesButton.buttonPressable, pressed && stylesButton.buttonPressed]}>
        <Text style={stylesButton.textButton}>+1</Text>
      </Pressable>
    </View>
  );
};

CounterScreen.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    name: PropTypes.number,
    buttonPressable: PropTypes.object,
};

CounterScreen.defaultProps = {
    children: <></>,
    style: {},
    name: '',
};
