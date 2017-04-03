import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Stylesheet from '../stylesheet';
import Dimensions from 'Dimensions';

const y = Dimensions.get('window').height;

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: '#007aff',
    fontSize: Stylesheet.FONT_SIZE_SMALL,
    fontWeight: '600',
    // paddingTop: 2,
    // paddingBottom: 2,
  },
  buttonStyle: {
    width: y * 0.149925,
    padding: 5
  }
};

export {Button};
