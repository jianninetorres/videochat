import React, { Component } from 'react';
import { View } from 'react-native';
import Camera from 'react-native-camera';
import Stylesheet from './stylesheet';

//front-facing camera here

class Smallscreen extends Component {
  render() {
    return (
      <Camera
        style={styles.screenstyles}
        type={Camera.constants.Type.front}/>
    );
  }
}

const styles = {
  screenstyles: {
    width: Stylesheet.SMALLSCREEN_WIDTH,
    height: Stylesheet.SMALLSCREEN_HEIGHT,
    backgroundColor: '#2f2f2f',
    bottom: Stylesheet.DEVICE_HEIGHT * 0.4, //266.8px
    left: Stylesheet.DEVICE_WIDTH * 0.2666667, //100px
    shadowColor: '#000',
    shadowOffset: { width: Stylesheet.DEVICE_WIDTH * 0.005333, height: Stylesheet.DEVICE_HEIGHT * 0.01133033 }, //w:2, h: 4
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
}

export default Smallscreen;
