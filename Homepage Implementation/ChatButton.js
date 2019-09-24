import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ChatButton extends Component {
  render() {
    return (
      <View>
        <Text style={styles.Button}> CHAT </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Button: {
//    backgroundColor:'#6495ed',
    fontSize: 24,
    justifyContent: 'center',
    width: 100,
  },
});