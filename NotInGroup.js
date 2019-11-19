import {View,StyleSheet,Text,StatusBar,List,SafeAreaView} from 'react-native';
import React, { Component } from 'react';
import {Content,Header,Input,Button,Icon, ListItem,Item} from 'native-base'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import  firebase from './firebase';

var tasksRef = firebase.database().ref('groups')
class NotInGroup extends Component{

    constructor(props){
        super(props)


    }

    joinGroup(key,pendingusers)  {
        var user = firebase.auth().currentUser;
       
        //pendingusers.push(user.email);
        if(pendingusers){
            pendingusers.push(user.email);}
        else{
            pendingusers =[]
            pendingusers.push(user.email);
        }
        tasksRef.child(key).child('pendingusers').set(pendingusers)
                
               
       }
    
    render(){
        name = this.props.navigation.getParam('item');
        user = firebase.auth().currentUser;
        return(


            <View style={styles.container}>


                        <Text style={styles.item}>Sorry, Please ask group owner to join this group.</Text>
                            

                        <TouchableOpacity
                            style={styles.button}
                            onPress ={() => this.joinGroup(name.key,name.pendingusers) }
                        >
                        <Text> Join Group</Text>
                         </TouchableOpacity>








      </View>


























        );
    }




}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
    },
    item: {
        alignItems: 'center',
        //backgroundColor: '#DDDDDD',
        padding: 10,
        justifyContent: 'center',
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },
  });


export default NotInGroup
