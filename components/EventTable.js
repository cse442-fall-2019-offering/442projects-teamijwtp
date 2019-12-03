<<<<<<< HEAD
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
=======
import React, { Component } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  Alert
} from "react-native";
import  firebase from '../firebase';


const rootRef =firebase.database().ref();
const eventRef = rootRef.child('events');

export default class EventTable extends Component {
  Going(key,usersAttendingg)  {
    var user = firebase.auth().currentUser;
    //console.log(key+ usersAttendingg)

    if(usersAttendingg){
      // duplication fix (checks if users already in list now)
      if(usersAttendingg.indexOf(user.email) > -1) {
      }
      else{  
      usersAttendingg.push(user.email)}
      }
    else{
        usersAttendingg =[]
        usersAttendingg.push(user.email)
    }
    eventRef.child(key).child('usersattending').set(usersAttendingg)

   }

   //key = key used to reference branch in database
   //userAttendingg = list of users currently attending
   notGoing(key,usersAttendingg)  {
    var user = firebase.auth().currentUser; //creates a varubale that stores user currenlty logged on


    if(usersAttendingg){

      //creates a new array called usersAttend that does not include user that pressed not going
    var usersAttend = usersAttendingg.filter(function(value){
        return value != user.email
    })
     // if theres someone attending, sets the array in the databse to usersAttend and make first user owner
    if(usersAttend && usersAttend.length>0){
       eventRef.child(key).child('usersattending').set(usersAttend)
       eventRef.child(key).child('owner').set(usersAttend[0])
    }
    // if no one is attending, set array to null
    else{
      eventRef.child(key).child('usersattending').set(null)
    }


    
    
}
    //console.log(key+ usersAttend)


   }

   DeleteFunction(key,usersList)  {
    var user = firebase.auth().currentUser;
    var list= true;
    eventRef.child(key).child('usersattending').once("value",snapshot=>{
      if (!snapshot.exists()){
          list=false;
          eventRef.child(key).remove();
      }
    });
    if (list!= false){
      if(usersList[0]==user.email){
    eventRef.child(key).remove();
      }
      
     
    }

   }
  render() {
    return (
      //if we pass a groupid this conditional will display events that have the same groupid (thisid)
    ( this.props.thisid == this.props.groupid)?
      <View style={styles.event}>
        <View style={styles.eventInfo}>
          <Text style={styles.text}>{this.props.eventDescription} </Text>
          <Text style={styles.text}>{this.props.eventLocation} </Text>
          <Text style={styles.text}>{this.props.eventTime} </Text>
        </View>

        <ScrollView style={styles.eventInfo}>
          {this.props.eventNames ? 
            this.props.eventNames.map((item, key) => (
            <Text key={key} style={styles.text}>
              {" "}
              {item}{" "}
            </Text>
          )):<Text></Text> }
        </ScrollView>
        <View style={styles.eventResponse}>
          <Button
            style={styles.eventLeftButton}
            title="Going"
            onPress={() => this.Going(this.props.k,this.props.eventNames)}
          />
          <Button
            style={styles.eventRightButton}
            title="Not Going"
            onPress={() =>  this.notGoing(this.props.k,this.props.eventNames)}
          />
           <Button
            style={styles.eventRightButton}
            title="Delete"
            onPress={() => this.DeleteFunction(this.props.k,this.props.eventNames)}
          />
        </View>
      </View>
    :
    <View></View>
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
  eventRightButton: {
    paddingLeft:2,
  },
  eventInfo: {
    width: "50%"
  },
  event: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  text: {
    color: "black"
  }
});
>>>>>>> develop3
