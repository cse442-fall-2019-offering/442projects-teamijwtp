import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
} from "react-native";

export default class PopUP extends Component {
  constructor() {
    super();
    this.state = {
      showMe: true
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal visible={this.state.showMe}>
        <View style = {styles.modelView}>
        <Text> Model Open </Text>
        <TouchableOpacity onPress={()=> {
          this.setState({
            showMe:false})}
          }>
        <Text style={styles.closeText}>Close   </Text>
        </TouchableOpacity>
        </View>
        </Modal>
        <TouchableOpacity onPress={()=> {
          this.setState({
            showMe:true})}
          }>
       </TouchableOpacity>
  </View>
    );
  }
}
