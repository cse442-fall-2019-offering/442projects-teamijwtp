import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeButton extends Component {
  render() {
    return (
      <View >
        <Text style={styles.Button}>HOME</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  Button: {
//    backgroundColor: '#00ffff',
    fontSize: 24,
    justifyContent:'flex-end',
    width: 100,

  },
});
