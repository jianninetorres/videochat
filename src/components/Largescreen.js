import React, { Component } from 'react';
import { View } from 'react-native';
import CardSection from './common';
import Smallscreen from './Smallscreen';
import Stylesheet from './stylesheet';


//backfacing camera here
class Largescreen extends Component {
  render() {
    return (
      <View style={styles.largestyles}/>
    );
  }
}

const styles = {
  largestyles: {
    width: Stylesheet.LARGESCREEN_WIDTH,
    height: Stylesheet.LARGSCREEN_HEIGHT,
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 2
  }
}

export default Largescreen;
