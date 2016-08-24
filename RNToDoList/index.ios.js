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
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
  NavigatorIOS,
} from 'react-native'

var SearchResults = require('./js/SearchResults').default;
var TODOList = require('./js/TODOList').default;

class RootComponent extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      scIndex:0,
    }
  }
  
  render() {
    var Container = this.state.scIndex === 0 ? 
        <TODOList/> : 
       <Image 
         style={{
           width: 300,
           height: 200,
         }}
         resizeMode={"contain"}
         source={{uri:'https://unsplash.it/600/400/?random'}}
       />
      return (
      <View style={styles.container}>
        <View
          ref='top-right button'
          style={styles.add}>
          <TouchableHighlight
            style = {{
                width: 60,
                height: 35,
            }}
            onPress={() => {}}
            activeOpacity={75 / 100}
            underlayColor={"rgb(210,210,210)"}
            >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "rgba(74,144,226,1)",
              }}>
              <Text>Press</Text>
            </View>
          </TouchableHighlight>
          </View>
        
        <View
          style={{
            alignItems: 'center',
            backgroundColor: "white",
            height: 50,
          }}>

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
         {Container}
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  add: {
    marginTop: 20,
    marginRight: 20,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',          
  },
  segment: {
    width: 300,
    marginTop: 10,
  },
  
});

AppRegistry.registerComponent('Project', () => RootComponent);
