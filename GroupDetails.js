import {View,StyleSheet,Text,StatusBar,List,SafeAreaView} from 'react-native';
import React, { Component } from 'react';
import {Content,Header,Input,Button,Icon, ListItem,Item} from 'native-base'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import  firebase from './firebase';



const rootRef =firebase.database().ref();
const groupRef = rootRef.child('groups');

class GroupDetails extends Component{

    constructor(props){
        super(props);
    }
    DeleteFunction(key,members){
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
        padding: 10,
      },
  });


export default GroupDetails
