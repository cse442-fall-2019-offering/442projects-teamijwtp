import {View,StyleSheet,Text,StatusBar,List,SafeAreaView} from 'react-native';
import React, { Component } from 'react';
import {Content,Header,Input,Button,Icon, ListItem,Item} from 'native-base'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import  firebase from './firebase';



const rootRef =firebase.database().ref();
const groupRef = rootRef.child('groups');

class GroupDetails extends Component{

    constructor(props){
        super(props)

    }

    
    DeleteFunction(key,members)  {
        var user = firebase.auth().currentUser;
        var list= true;
        groupRef.child(key).child('members').once("value",snapshot=>{
          if (!snapshot.exists()){
              list=false;
              groupRef.child(key).remove();
          }
        });
        if (list!= false){
          if(members[0]==user.email){
        groupRef.child(key).remove();
          }
        }

       }

       leaveFunction(key,members)  {
        var user = firebase.auth().currentUser; //creates a varubale that stores user currenlty logged on


        if(members){

          //creates a new array called newMem that does not include user that pressed not going
        var newMem = members.filter(function(value){
            return value != user.email
        })


        //sets the array in the database to newMem
        groupRef.child(key).child('members').set(newMem)
        groupRef.child(key).child('owner').set(newMem[0])
        }
        

       }







    render(){
      name = this.props.navigation.getParam('item')

        return(


            <View style={styles.container}>


                        <Text style={styles.item}>"Key: "{name.Key}</Text>
                        <Text style={styles.item}>"Name: "{name.name}</Text>
                        <Text style={styles.item}>"Owner": "{name.owner}"</Text>



              <TouchableOpacity
                style={styles.button}

                onPress ={() => this.DeleteFunction(name.key,name.members)}
              >
                <Text> Delete</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.button}

                onPress ={() => this.leaveFunction(name.key,name.members)}
              >
                <Text>Leave</Text>
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


export default GroupDetails
