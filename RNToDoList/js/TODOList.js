import React, { Component, PropTypes,} from 'react'
import {
  View,
  ListView,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'

var ToDoCell = require('./ToDoCell').default;

class TodoList extends Component {

  static propTypes = {
    isFinished: PropTypes.bool.isRequired,
    inputData: PropTypes.array.isRequired,
  }

  static defaultProps = {}

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    
    this.state = {}
  }
  
//   componentWillReceiveProps(props){
//     alert('componentWillUpdate'+props.inputData)
//     this.setState({
//       dataSource: this.state.dataSource.cloneWithRows(props.inputData)
//     });
//  }
  
   renderRow(rowData, sectionID, rowID) {
    return (
      <ToDoCell
        content= {rowData}
        isFinished= {this.props.isFinished}
        />
    )
  }

  render() {
    var ds = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        enableEmptySections={true} //MUST
        dataSource={ds.cloneWithRows(this.props.inputData)}
        renderRow={this.renderRow.bind(this)}/>
    )
  }
}

export default TodoList        