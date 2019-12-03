import {View,StyleSheet,TouchableOpacity,Text,} from 'react-native';
import React, { Component } from 'react';
import  firebase from '../firebase';
import {Input,Item,Label} from 'native-base'
import MyDatePicker from '../components/MyDatePicker'




const rootRef =firebase.database().ref();
const eventRef = rootRef.child('events');

 class EventForm extends Component{


     constructor(props){
         super(props);

     }

    state= {
        name: '',
        location:'',
        time:'',
        owner:'',
        description:'',

    }

    enter = () =>{
        var user = firebase.auth().currentUser;

             eventRef.push({
                 name:this.state.name,
                 location:this.state.location,
                 time:this.state.time,
                 usersattending:[user.email],
                 owner: [user.email],
                 description: this.state.description
             })


            this.props.navigation.navigate('Events')
    }


    render(){
        const {navigate} = this.props.navigation;
        
        return(
            <View style = {styles.container}>
                <View>
                <View style = {styles.headerView}>
                    <Text style = {styles.headingText}>
                            Create New Event
                    </Text>
                </View>

                <Item style ={{marginTop:40,marginBottom:40}}floatingLabel>
                    <Label>Enter event name</Label>
                    <Input
                        value = {this.state.name}
                        onChangeText = {(name) => this.setState({name})}
                    />

                </Item>

                <Item style ={{marginTop:40,marginBottom:40}}floatingLabel>
                    <Label>Enter event location </Label>
                    <Input
                        value = {this.state.location}
                        onChangeText = {(location) => this.setState({location})}
                    />

                </Item>

                <Item style ={{marginTop:40,marginBottom:40}}floatingLabel>
                    <Label>Enter a description</Label>
                    <Input
                        value = {this.state.description}
                        onChangeText = {(description) => this.setState({description})}
                    />

                </Item>
                
                    <Label>Enter event Time </Label>
                    

                

               
                    <MyDatePicker
                    
                    onDateChange={(date) => this.setState({time:date}) } />
                    

                

                <TouchableOpacity
                     style= {styles.button}
                     onPress = {this.enter}
                >
                     <Text>Enter</Text>

                </TouchableOpacity>



            </View>
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
    padding: 20,
    marginTop:20
   }


});

export default EventForm