import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const CallButton = ({onPress, buttonStyle}) => {
  return(
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text>Call</Text>
    </TouchableOpacity>
  );
}

const styles = {
  buttonstyles: {
    borderWidth: 1,
    // borderRadius: ,
    backgroundColor: 'red'
  }
}
 export { CallButton };
