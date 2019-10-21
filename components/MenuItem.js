import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";

export default class MenuItem extends Component {
  render() {
    return (
      <View style={styles.menuItem}>
        <TouchableHighlight style={styles.touch} onPress={this.props.fnc}>
          <Image source={this.props.itemImage} style={styles.image} />
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  menuItem: {
    width: "50%",
    height: "33.33%",
    padding: 2
  },
  image: {
    width: "95%",
    height: "95%"
  }
});
