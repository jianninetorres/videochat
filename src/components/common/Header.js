// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
import Dimensions from 'Dimensions';

const y = Dimensions.get('window').height;

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      {props.children}
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: y * 0.089996,
    paddingTop: 15,
  },
  textStyle: {
    fontSize: 20,
    color: '#fff'
  }
};

// Make the component available to other parts of the app
export {Header};
