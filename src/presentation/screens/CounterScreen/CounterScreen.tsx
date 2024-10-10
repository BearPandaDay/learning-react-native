import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {View, Text, Pressable} from 'react-native';
import { StylesButton } from '../../../styles';
import { Button } from 'react-native-paper';

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
      {/* <Pressable onPress={() => onPressIncreseDecrese(1)} onLongPress={() => setNumber(0)} style={({pressed}) => [stylesButton.buttonPressable, pressed && stylesButton.buttonPressed]}>
        <Text style={stylesButton.textButton}>+1</Text>
      </Pressable> */}
      <Button
        mode="contained"
        onPress={() => onPressIncreseDecrese(1)}
        onLongPress={() => setNumber(0)}
        style={stylesButton.buttonPressable}
      >
        <Text style={stylesButton.textButton}>Increment</Text>
      </Button>
    </View>
  );
};

CounterScreen.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    name: PropTypes.string,
    buttonPressable: PropTypes.object,
};

CounterScreen.defaultProps = {
    children: <></>,
    style: {},
    name: '',
};
