/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  SegmentedControlIOS,
} from 'react-native'

var segmentedControl = require('./js/segmentControl').default;

class rootComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SegmentedControlIOS 
          values={['TODO', 'FINISHED']}
          momentary={false}
          tintColor={'"rgb(74,144,226)"'}
          style={styles.segment}
          selectedIndex={(this.state && this.state.scIndex) || 0}
          onValueChange={(value) => {}}
          onChange={(event) => {
            this.setState({
              scIndex: event.nativeEvent.selectedSegmentIndex
            })
          }}
        />
        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  segment: {
    width: 300,
    marginTop: 20,
  },
  
});

AppRegistry.registerComponent('Project', () => rootComponent);
