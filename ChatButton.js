import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ChatButton extends Component {
  render() {
    return (
      <View>
      <TouchableOpacity style = {styles.Button}>
      <Text style ={styles.buttonText}>CHAT</Text>
    </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Button: {
    justifyContent: 'center',
    width: 100,
    borderWidth: 1,
    padding: 15,
  },

  buttonText:{
    textAlign : "center"
  },

});
