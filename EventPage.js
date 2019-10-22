import { StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import firebase from './firebase';
import { View, Container, Input, Item, Button, Label, Form } from 'native-base'

class EventPage extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container} >
        <Text>  This is the event page </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default EventPage
