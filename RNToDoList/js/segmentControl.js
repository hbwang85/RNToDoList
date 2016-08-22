'use strict';
import React, { Component, } from 'react'
import {
  SegmentedControllerIOS,
  StyleSheet,
  SegmentedControlIOS,
} from 'react-native'

export default class SegmentControl extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <SegmentedControlIOS 
          values={['A', 'B', 'C']}
          momentary={true}
          tintColor={"rgb(74,144,226)"}
          style={{
            width: 100,
          }}
          selectedIndex={(this.state && this.state.scIndex) || 0}
          onValueChange={(value) => {}}
          onChange={(event) => {
            this.setState({
              scIndex: event.nativeEvent.selectedSegmentIndex
            })
          }}
        />
    )
  }
}
