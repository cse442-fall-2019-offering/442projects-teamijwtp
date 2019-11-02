import React, {Component} from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

export default class HomeButton extends Component {
  render() {
    return (
      <View >
        <TouchableOpacity style = {styles.Button}>
        <Text style ={styles.buttonText}>HOME</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  Button: {
    justifyContent:'flex-end',
    width: 100,
    padding: 15,
  },

  buttonText:{
    textAlign : "center"
  },
});
