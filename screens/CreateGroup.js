import {View,StyleSheet,TouchableOpacity,Text,} from 'react-native';
import React, { Component } from 'react';
import  firebase from '../firebase';
import {Input,Item,Label} from 'native-base'

const rootRef =firebase.database().ref();
const groupRef = rootRef.child('groups');

class CreateGroup extends Component{


    constructor(props){
        super(props);

    }

   state= {
       name: '',
       token: '',
       owner:''



   }

   enter = () =>{
       var user = firebase.auth().currentUser;

            groupRef.push({
                name:this.state.name,
                token: this.state.token,
                owner: [user.email],
                members:[user.email],
                pendingusers:[],
                events:[],
            })


           this.props.navigation.navigate('Groups')
   }


   render(){
       const {navigate} = this.props.navigation;
       return(
           <View style = {styles.container}>
               <View style = {styles.headerView}>
                   <Text style = {styles.headingText}>
                           Create New Group
                   </Text>
               </View>

               <Item style ={{marginBottom:20}}floatingLabel>
                   <Label>Enter group name</Label>
                   <Input
                       value = {this.state.name}
                       onChangeText = {(name) => this.setState({name})}
                   />

               </Item>

               <Item style ={{marginBottom:20}}floatingLabel>
                   <Label>Enter group key</Label>
                   <Input
                       value = {this.state.token}
                       onChangeText = {(token) => this.setState({token})}
                   />

               </Item>

               <TouchableOpacity
                    style= {styles.button}
                    onPress = {this.enter}
               >
                    <Text>Enter</Text>

               </TouchableOpacity>


           </View>


       );
   }




}

const styles = StyleSheet.create({
  container:{


  },
  headingText:{
      fontSize:25,
      color:'black',
      alignSelf:'center'


  },
  headerView:{
      backgroundColor:'grey',
      padding:10,
      marginBottom:20,


  },
  input:{
   marginBottom:45,

  },
  button:{
   alignItems: 'center',
   backgroundColor: 'grey',
   padding: 10
  }


});

export default CreateGroup
