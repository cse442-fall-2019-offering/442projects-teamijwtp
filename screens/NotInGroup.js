import {View,StyleSheet,Text} from 'react-native';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  firebase from '../firebase';


class NotInGroup extends Component{

    constructor(props){
        super(props)


    }

    joinGroup(key,pendingusers)  {
       
        var groupRef = firebase.database().ref('groups')
        var user = firebase.auth().currentUser;
        
        if(pendingusers){
            pendingusers.push(user.email);}
        else{
            pendingusers =[]
            pendingusers.push(user.email);
        }
       groupRef.child(key).child('pendingusers').set(pendingusers)
                
               
       }
    
    render(){
        name = this.props.navigation.getParam('item');
        
        return(


            <View style={styles.container}>


                        <Text style={styles.item}>Sorry, you do not have access to this group.</Text>
                        <Text style={styles.item}>Click the join button to enter.</Text>
                            

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
     backgroundColor:'grey'
    },
    item: {
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
        fontSize:20
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },
  });


export default NotInGroup