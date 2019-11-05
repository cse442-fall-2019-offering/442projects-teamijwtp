import {View,StyleSheet,TouchableOpacity,Text,} from 'react-native';
import React, { Component } from 'react';
import  firebase from './firebase';
import {Input,Item,Label} from 'native-base'




const rootRef =firebase.database().ref();
const eventRef = rootRef.child('events');

 class EditPage extends Component{

   

     constructor(props){
         super(props);

     }
     
    state= {
       
        name: '',
        location:'',
        time:'',

    }

    componentDidMount(){
        var eventdeets = this.props.navigation.getParam('name')
        this.setState({
            name:eventdeets.name,
            time:eventdeets.time,
            location:eventdeets.location                   
        });  



       }

    enter = () =>{
        var user = firebase.auth().currentUser;
        var name =this.props.navigation.getParam('name')
        var event = eventRef.child(name.key)
        
       
             event.update({
                 name:this.state.name,
                 location:this.state.location,
                 time:this.state.time,
               
             })


            this.props.navigation.navigate('GroupPage')
    }

    
  
    render(){
        const {navigate} = this.props.navigation;
        
      
        return(
            <View style = {styles.container}>
                <View style = {styles.headerView}>
                    <Text style = {styles.headingText}>
                            Edit Group
                    </Text>
                </View>

                <Item style ={{marginBottom:20}}floatingLabel>
                    <Label>Enter event name</Label>
                    <Input 
                      
                        value = {this.state.name}
                       
                        onChangeText = {(name) => this.setState({name})}
                    />

                </Item>

                <Item style ={{marginBottom:20}}floatingLabel>
                    <Label>Enter event location </Label>
                    <Input 
                        value = {this.state.location}
                        onChangeText = {(location) => this.setState({location})}
                    />

                </Item>

                <Item style ={{marginBottom:20}}floatingLabel>
                    <Label>Enter event time </Label>
                    <Input 
                        value = {this.state.time}
                        onChangeText = {(time) => this.setState({time})}
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
       color:'white',
       alignSelf:'center'
       

   },
   headerView:{
       backgroundColor:'blue',
       padding:10,
       marginBottom:20,
       

   },
   input:{
    marginBottom:45,

   },
   button:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
   }
   
   
});

export default EditPage