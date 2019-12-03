import {View,StyleSheet,Text} from 'react-native';
import React, { Component } from 'react';

import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import  firebase from '../firebase';




const rootRef =firebase.database().ref();
const eventRef = rootRef.child('groups');

class PendingRequest extends Component{

    constructor(props){
        super(props)


    }

    //DATA is the event clicked on
    //item is the users email for easier reference 
    PendingUser = (DATA,item) =>{
        this.props.navigation.navigate('PendingUser',{name:item,event:DATA})
    }


    render(){
      DATA = this.props.navigation.getParam('name')
     
      const {navigate} = this.props.navigation;
      
        
      return(


            <View style={styles.container}>


             <FlatList

                  data={DATA.pendingusers}
                  renderItem={({item}) =>
                    
                   <TouchableOpacity style={styles.item}
                   onPress ={() => this.PendingUser(DATA,item)}
                   >
                       
                      <Text style = {styles.item}>{item}</Text>
                      
                   </TouchableOpacity >}
                   
                   keyExtractor={(item, index) => index.toString()}
                />









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


export default PendingRequest
