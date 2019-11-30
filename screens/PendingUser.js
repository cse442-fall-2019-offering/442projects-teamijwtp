import {View,StyleSheet,Text} from 'react-native';
import React, { Component } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import  firebase from '../firebase';




const rootRef =firebase.database().ref();
const eventRef = rootRef.child('groups');

class PendingUser extends Component{

    constructor(props){
        super(props)


    }

    //DATA is the event clicked on
    //item is the users email for easier reference 
    AllowUser = (DATA,item) =>{
        
        var pendingUserList = DATA.pendingusers
        var index = pendingUserList.indexOf(item)
        if (index > -1) {
            pendingUserList.splice(index, 1);
          }
        var membersList = DATA.members
        membersList.push(item);


        eventRef.child(DATA.key).child('pendingusers').set(pendingUserList)
        eventRef.child(DATA.key).child('members').set(membersList)
        this.props.navigation.navigate('GroupOwnerGroupDetails', {item:DATA})
    }


    render(){
      DATA = this.props.navigation.getParam('event')
      item = this.props.navigation.getParam('name')
      const {navigate} = this.props.navigation;
      
        
      return(


            <View style={styles.container}>


            
                    <TouchableOpacity style={styles.item}
                   onPress ={() => this.AllowUser(DATA,item)}
                   >
                       
                      <Text style = {styles.item}>ALLOW</Text>
                      
                   </TouchableOpacity >






              </View>


























        );
    }




}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },
  });


export default PendingUser