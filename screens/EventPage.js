import {View,StyleSheet,Text,StatusBar,List,SafeAreaView} from 'react-native';
import React, { Component } from 'react';
import {Content,Header,Input,Button,Icon, ListItem,Item} from 'native-base'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import  firebase from '../firebase';



const rootRef =firebase.database().ref();
const eventRef = rootRef.child('events');
class EventPage extends Component{

    constructor(props){
        super(props)


    }




     componentDidMount(){
        //  name = {this.props.navigation.getParam('item') }
     /*      tasksRef.orderByChild("name").equalTo(name).on("child_added",
           function(snapshot){
               console.log(snapshot.key)
               console.log(snapshot.child("name"))
               console.log(snapshot.child("location"))
               console.log(snapshot.child("time"))
           })*/
          // console.log("These are the props" +this.props+ "END")
  //name = this.props.navigation.getParam('item')
  //console.log(name)



       }

       Going(key,usersAttendingg)  {
        var user = firebase.auth().currentUser;
        //console.log(key+ usersAttendingg)

        if(usersAttendingg){
        usersAttendingg.push(user.email)}
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


        //sets the array in the databse to usersAttend
        eventRef.child(key).child('usersattending').set(usersAttend)
        eventRef.child(key).child('owner').set(usersAttend[0])
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





    render(){
        name = this.props.navigation.getParam('item')
        console.log(name)
        return(


            <View style={styles.container}>


<Text style={styles.item}>"Key: "{name.key}</Text>
                        <Text style={styles.item}>"Name: "{name.name}</Text>
                        <Text style={styles.item}>"Time: " {name.time}</Text>
                        <Text style={styles.item}>"Location: "{name.location}</Text>
                        <Text style={styles.item}>"UsersAttending: "{name.usersAttending}</Text>



                        <TouchableOpacity
         style={styles.button}
         onPress ={() => this.Going(name.key,name.usersAttending)}
       >
         <Text> Going </Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={styles.button}
         onPress ={() => this.notGoing(name.key,name.usersAttending)}
       >
         <Text> Not going </Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={styles.button}
         onPress ={() => this.DeleteFunction(name.key,name.usersAttending)}
       >
         <Text> Delete</Text>
       </TouchableOpacity>


      </View>


























        );
    }




}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },
  });


export default EventPage
