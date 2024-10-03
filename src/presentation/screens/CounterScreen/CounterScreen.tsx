import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button} from 'react-native';

interface properties {
  children: any;
  style: istyles;
  name?: string;
}

interface istyles {
  styleSafeAreaView: object;
  styleView: object;
  styleText: object;
}

export const CounterScreen = (props: properties) => {
    const {children, style} = props;

    const [number, setNumber] = useState(0);

    function onPressIncreseDecrese(value:number):void {
        setNumber(prev => prev + value);
    }

  return (
    <View style={style.styleView}>
      <Text style={style.styleText}>{number}</Text>
      {children}
      <Button
        title="+1"
        onPress={() => onPressIncreseDecrese(1)}
      />
      <Button
        title="-1"
        onPress={() => ((number > 0) ? onPressIncreseDecrese(-1) : null)}
      />
    </View>
  );
};

CounterScreen.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    name: PropTypes.number,
};

CounterScreen.defaultProps = {
    children: <></>,
    style: {},
    name: '',
};
