//Chatbox

import React, { Component }  from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Dimensions from 'Dimensions';
import Stylesheet from './stylesheet';
import { Header, Button, CardSection } from './common';



class Chatbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  navigate(routeName) {
    this.props.navigator.pop({
      name: routeName
    });
  }

  render() {
    const { wholeWindow, iconStyle, messageWindow, messageWindowText, inputStyle, goHomeBtn, closeChatBtn, sendBtnStyle, inputArea } = styles;

    return (
      <KeyboardAvoidingView behavior="padding" style={wholeWindow}>

        <Header headerText="Messages">
          <Button onPress={this.navigate.bind(this, 'Home')}>
            <Image
              source={require('../../assets/icons/left_arrow.png')}
              style={iconStyle}/>
          </Button>
        </Header>

        <View style={messageWindow}>
          <Text style={messageWindowText}>{this.state.text}</Text>
        </View>

        <View style={inputArea}>
          <TextInput
            placeholder={'Type here'}
            autoCorrect={false}
            style={inputStyle}
            value={this.state.text}
            onChangeText={(text) => this.setState({text})}/>
            <TouchableOpacity style={sendBtnStyle}>
              <Text style={{color: '#fff'}}>Send</Text>
            </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  wholeWindow: {
    flex: 1,
    width: Stylesheet.DEVICE_WIDTH,
    height: Stylesheet.DEVICE_HEIGHT,
    backgroundColor: '#22313F',
    justifyContent: 'center',
    padding: 10,
    // borderWidth: 1,
    // borderColor: 'green'
  },
  iconStyle: {
    width: Stylesheet.DEVICE_WIDTH * 0.085333,
    height: Stylesheet.DEVICE_WIDTH * 0.085333
  },
  inputStyle: {
    color: '#fff',
    flex: 2,
    fontSize: Stylesheet.FONT_SIZE, //16px
    width: Stylesheet.DEVICE_WIDTH,
    height: Stylesheet.DEVICE_HEIGHT * 0.05997, //40px
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  messageWindow: {
    flexDirection: 'column',
    flex: 1,
    height: Stylesheet.DEVICE_HEIGHT * 0.5112444, //341px
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: Stylesheet.DEVICE_WIDTH * 0.0533333, //20px,
    // borderWidth: 1,
    // borderColor: 'red'
  },
  messageWindowText: {
    color: '#fff'
  },
  sendBtnStyle: {
    height: Stylesheet.DEVICE_HEIGHT * 0.029985,
    borderLeftWidth: 1,
    borderColor: '#22313F'
    // paddingRight: x * 0.0533333 //20px
  },
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: Stylesheet.DEVICE_WIDTH * 0.02666667, //10px
    paddingLeft: Stylesheet.DEVICE_WIDTH * 0.02666667, //20px
    marginBottom: Stylesheet.DEVICE_WIDTH * 0.02666667, //10px
    backgroundColor: '#000',
    opacity: 0.6,
    // borderWidth: 1,
    // borderColor: 'blue'
  }
}


export default Chatbox;
