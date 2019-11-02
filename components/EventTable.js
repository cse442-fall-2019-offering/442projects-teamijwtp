import React, { Component } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  Alert
} from "react-native";

export default class EventTable extends Component {
  render() {
    return (
      <View style={styles.event}>
        <View style={styles.eventInfo}>
          <Text style={styles.text}>{this.props.eventDescription} </Text>
          <Text style={styles.text}>{this.props.eventLocation} </Text>
          <Text style={styles.text}>{this.props.eventTime} </Text>
        </View>

        <ScrollView style={styles.eventInfo}>
          {this.props.eventNames.map((item, key) => (
            <Text key={key} style={styles.text}>
              {" "}
              {item}{" "}
            </Text>
          ))}
        </ScrollView>
        <View style={styles.eventResponse}>
          <Button
            style={styles.eventLeftButton}
            title="Going"
            onPress={() => Alert.alert("Going function here")}
          />
          <Button
            style={styles.eventRightButton}
            title="Not Going"
            onPress={() => Alert.alert("Not Going function here")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eventResponse: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  eventLeftButton: {},
  eventRightButton: {},
  eventInfo: {
    width: "50%"
  },
  event: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  text: {
    color: "white"
  }
});
