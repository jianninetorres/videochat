import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Stylesheet from './stylesheet';

const Controls = ({ callPhone, openCamera, sendMsg }) => {
  const { controlstyles, contactbuttons } = styles;
  return (
    <View style={controlstyles}>
      <TouchableOpacity onPress={callPhone}>
      <Image
        style={contactbuttons}
        source={require('../../assets/icons/phone.png')}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={openCamera}>
        <Image
          style={contactbuttons}
          source={require('../../assets/icons/video.png')}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={sendMsg}>
        <Image
          style={contactbuttons}
          source={require('../../assets/icons/messages.png')}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  controlstyles: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  contactbuttons: {
    width: Stylesheet.DEVICE_WIDTH * 0.1066667, //50px
    height: Stylesheet.DEVICE_WIDTH * 0.1066667, //50px
    margin: Stylesheet.DEVICE_WIDTH * 0.0373333, //14px,
    backgroundColor: '#22A7F0',
    borderRadius: Stylesheet.DEVICE_WIDTH * 0.1066667 / 2,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
}

export default Controls;
