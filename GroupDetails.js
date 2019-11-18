import {View,StyleSheet,Text,StatusBar,List,SafeAreaView} from 'react-native';
import React, { Component } from 'react';
import {Content,Header,Input,Button,Icon, ListItem,Item} from 'native-base'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import  firebase from './firebase';



const rootRef =firebase.database().ref();
const eventRef = rootRef.child('events');

class GroupDetails extends Component{

    constructor(props){
        super(props)


    }


    render(){
      name = this.props.navigation.getParam('item')

        return(


            <View style={styles.container}>


                        <Text style={styles.item}>"Key: "{name.key}</Text>
                        <Text style={styles.item}>"Name: "{name.name}</Text>
                        <Text style={styles.item}>"Owner": "{name.owner}"</Text>











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
