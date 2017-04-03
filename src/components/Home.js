//Parent Component

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Card, CardSection, Input } from './common';
import Largescreen from './Largescreen';
import Smallscreen from './Smallscreen';
import Controls from './Controls';
import Stylesheet from './stylesheet';
import Chatbox from './Chatbox';
import Dimensions from 'Dimensions';

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;


//in XCode uncheck Landscape left and Landscape right in Device Orientation
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cameraBtn: false,
      smallCameraOn: false
    }

    this.toggleCameraBtn = this.toggleCameraBtn.bind(this);
    this.showSmallCamera = this.showSmallCamera.bind(this);
  }

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    })
  }

  toggleCameraBtn() {
    if(this.state.cameraBtn == false) {
      this.setState({
        cameraBtn: true
      })
      // console.log('cameraBtn: true');
    }
    else {
      this.setState({
        cameraBtn: false
      })
      // console.log('cameraBtn: false');
    }
  }

  showSmallCamera() {
    if(this.state.cameraBtn) {
      return <Smallscreen />
    }
    else {
      return <View style={styles.smallscreenstyles}/>
    }
  }

  render() {
    const { topColour, bottomColor, controlstyles, contactbuttons, callPhone, openCamera } = styles;
    return(
      <View>

        <CardSection>
          <Largescreen />
        </CardSection>

        <CardSection>
          <View style={bottomColor}>
            <Controls
              openCamera={this.toggleCameraBtn}
              sendMsg={this.navigate.bind(this, 'Chatbox')}/>
          </View>
        </CardSection>

        <CardSection>
          {this.showSmallCamera()}
        </CardSection>

        <CardSection>
          <Chatbox />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  topColour: {
    width: Stylesheet.DEVICE_WIDTH,
    height: Stylesheet.DEVICE_HEIGHT * 0.112443778, //100px
    backgroundColor: '#22313F'
  },
  bottomColor: {
    width: Stylesheet.DEVICE_WIDTH,
    height: Stylesheet.DEVICE_HEIGHT * 0.329835, //220px
    backgroundColor: '#2e1c0e', //original - 524039
    justifyContent: 'center',
    alignItems: 'center'
  },
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
  },
  smallscreenstyles: {
    width: Stylesheet.SMALLSCREEN_WIDTH,
    height: Stylesheet.SMALLSCREEN_HEIGHT,
    backgroundColor: '#191919',
    bottom: Stylesheet.DEVICE_HEIGHT * 0.4, //266.8px
    left: Stylesheet.DEVICE_WIDTH * 0.2666667, //100px
    shadowColor: '#000',
    shadowOffset: { width: Stylesheet.DEVICE_WIDTH * 0.005333, height: Stylesheet.DEVICE_HEIGHT * 0.01133033 }, //w:2, h: 4
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
}
