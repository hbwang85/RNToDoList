import React, { Component, } from 'react'
import {
  View,
  ListView,
  Text,
  TouchableHighlight,
} from 'react-native'

class TodoList extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    
    this.state = {
      dataSource: ds.cloneWithRows(['1', '2', '3']),
    }
    
  }
  
   renderRow(rowData, sectionID, rowID) {
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
                justifyContent: 'center',
                alignItems: 'flex-start',
                backgroundColor: "rgba(116,169,233,1)",
                height: 58,
              }}>
              <Text
              style={{
                color: 'white',
                fontSize:  18,
                fontWeight: '300',
                fontFamily: "Helvetica Neue",
                marginLeft: 20,
              }}>
              My Text
            </Text>
            </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ListView
        enableEmptySections={true} //MUST
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    )
  }
}

export default TodoList        