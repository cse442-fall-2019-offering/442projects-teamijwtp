import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class OptionButton extends Component {
  render() {
    return (
      <View>
        <Text style={styles.Button}>OPTION</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Button: {
  //   backgroundColor: '#00bfff',
     fontSize: 24,
     justifyContent:'flex-end',
     width: 100,
  },
});