import React, { Component } from 'react';
import { View, Navigator } from 'react-native';
import Home from './components/Home';
import Chatbox from './components/Chatbox';


class App extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    if (route.name == 'Home') {
      return <Home navigator={navigator} />
    }
    if (route.name == 'Chatbox') {
      return <Chatbox navigator={navigator} />
    }
  }


  render() {
    return (
        <Navigator
          initialRoute={{ name: 'Home' }}
          renderScene={this.renderScene.bind(this)}
        />
    );
  }
}

export default App;
