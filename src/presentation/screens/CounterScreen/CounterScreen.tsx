import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  // Pressable,
  StyleSheet,
  Platform,
} from 'react-native';
import { StylesButton } from '../../../styles';
import {
  // Button,
  FAB,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/Ionicons';
// import Icon from 'react-native-vector-icons/dist/AntDesign';
import { Isdark } from '../../../utils';

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
    <>
    <View style={style.styleView}>
      <Text style={style.styleText}>{number}</Text>
      {children}
      {/* <Pressable onPress={() => onPressIncreseDecrese(1)} onLongPress={() => setNumber(0)} style={({pressed}) => [stylesButton.buttonPressable, pressed && stylesButton.buttonPressed]}>
        <Text style={stylesButton.textButton}>+1</Text>
      </Pressable> */}
      {/* <Button
        mode="contained"
        onPress={() => onPressIncreseDecrese(1)}
        onLongPress={() => setNumber(0)}
        style={stylesButton.buttonPressable}
      >
        <Text style={stylesButton.textButton}>Increment</Text>
      </Button> */}
      <FAB
        label=""
        onPress={() => onPressIncreseDecrese(1)}
        onLongPress={() => setNumber(0)}
        style={stylesButton.fab}
        icon="add-outline"
      />
        {/* <Icon style={StyleSheet.create({prueba: {fontSize: 80, color: `${Isdark() ? '#fff' : '#000'}`}}).prueba} name="battery-charging-outline" /> */}
        <Icon style={StyleSheet.create({prueba: {fontSize: 80, color: `${Isdark() ? '#fff' : '#000'}`}}).prueba} name={Platform.OS === 'ios' ? 'logo-apple' : 'logo-android'} />
    </View>
    </>
  );
};

CounterScreen.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    name: PropTypes.string,
    buttonPressable: PropTypes.object,
};

// CounterScreen.defaultProps = {
//     children: <></>,
//     style: {},
//     name: '',
// };
