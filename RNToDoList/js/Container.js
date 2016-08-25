import React, { Component, } from 'react'
import { View, 
       StyleSheet,
       TouchableHighlight,
       SegmentedControlIOS,
       Text,
       Image,
       } from 'react-native'

var TODOList = require('./TODOList').default;

class Container extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      scIndex:0,
    }
  }

  render() {
    let isFinished = this.state.scIndex != 0;
    let inputData = isFinished ? ['f1', 'f2'] : ['1', '2', '3'];
    return (
      <View style={styles.container}>
        <View
          style={{  
            alignItems: 'center',
            backgroundColor: "white",
            height: 50,
            marginTop: 64,
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
         <TODOList
            isFinished={isFinished}
            inputData={inputData}
          />
      </View>

    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  segment: {
    width: 300,
    marginTop: 10,
  },
});

export default Container