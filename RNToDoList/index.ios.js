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
        }}/>
    )
  }
  
}

const styles = StyleSheet.create({
  
  
});

AppRegistry.registerComponent('Project', () => RootComponent);
