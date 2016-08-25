/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  AlertIOS,
} from 'react-native'

var Container = require('./js/Container').default;

class RootComponent extends Component {
  constructor(prop) {
    super(prop)
    this.state = {}
  }
  
  render() {
    return(
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          title: 'ToDo',
          component: Container,
          rightButtonTitle: 'Add',
          onRightButtonPress: () => this._showAlert(),
        }}/>
    )
  }
  
  _showAlert() {
    AlertIOS.prompt(
      'Add a new task',
      'Enter a new task below',
      null
    )
  }
  
}

const styles = StyleSheet.create({
  
  
});

AppRegistry.registerComponent('Project', () => RootComponent);
