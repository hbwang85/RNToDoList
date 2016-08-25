import React, { Component, PropTypes,} from 'react'
import { View, 
        TouchableHighlight,
        Text,
       } from 'react-native'

class ToDoCell extends Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
    isFinished: PropTypes.bool.isRequired,
  }

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    var bgColor = this.props.isFinished ? 'gray' : 'rgba(116,169,233,1)';
    return (
      <TouchableHighlight
        activeOpacity={75 / 100}
        underlayColor={"rgb(210,210,210)"}>
          <View
            style={{
            flex: 1,
            height: 60,
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
            <View
              style={{
                justifyContent:  'center' ,
                alignItems:  'flex-start' ,
                backgroundColor: bgColor,
                height: 58,
              }}>
              <Text
              style={{
                color:  'white' ,
                fontSize:  18,
                fontWeight:  '300' ,
                fontFamily:  "Helvetica Neue" ,
                marginLeft: 20,
              }}>
                {this.props.content}
            </Text>
            </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default ToDoCell