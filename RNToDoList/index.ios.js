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
    this.state = {
      inputTask: '',
    }
  }
  
  render() {
    let data = this.state.inputTask;
          alert('rerender:'+data);

    return(
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          title: 'ToDo',
          component: Container,
          rightButtonTitle: 'Add',
          passProps:{inputData: data},
          onRightButtonPress: () => this._showAlert(),
        }}/>
    )
  }
  
  _showAlert() {
    AlertIOS.prompt(
      'Add a new task',
      'Enter a new task below',
      this._addTask,
    )
  }
  
  _addTask = (promptValue) => {
//     alert("this is the task "+ JSON.stringify(promptValue));
    this.setState({
      inputTask: JSON.stringify(promptValue),
    })
  }
  
}


AppRegistry.registerComponent('Project', () => RootComponent);
