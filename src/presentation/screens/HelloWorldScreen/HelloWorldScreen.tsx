import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

interface properties {
  children: any,
  style: istyles,
  name?: string,
}

interface istyles {
  styleSafeAreaView: object,
  styleView: object,
  styleText: object,
}

export const HelloWorldScreen = (props:properties) => {
  const {children, style, name} = props;

  return (
    <View style={style.styleView}>
      <Text numberOfLines={1} ellipsizeMode="middle" style={style.styleText}>HelloWorldScreen {name}</Text>
      {children}
    </View>
  );
};

HelloWorldScreen.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  name: PropTypes.string,
};

HelloWorldScreen.defaultProps = {
  children: <></>,
  style: {color: '#000000'},
  name: 'world',
};
