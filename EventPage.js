import {View,StyleSheet,Text,StatusBar,List,SafeAreaView} from 'react-native';
import React, { Component } from 'react';
import {Content,Header,Input,Button,Icon, ListItem,Item} from 'native-base'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import  firebase from './firebase';



const rootRef =firebase.database().ref();
const eventRef = rootRef.child('events');

class EventPage extends Component{
    
    constructor(props){
        super(props)

        
    }

  
    

     componentDidMount(){
        //  name = {this.props.navigation.getParam('item') }
     /*      tasksRef.orderByChild("name").equalTo(name).on("child_added",
           function(snapshot){
               console.log(snapshot.key)
               console.log(snapshot.child("name"))
               console.log(snapshot.child("location"))
               console.log(snapshot.child("time"))
           })*/
          // console.log("These are the props" +this.props+ "END")
  //name = this.props.navigation.getParam('item')
  //console.log(name)



       }

       Going(key,usersAttendingg)  {
        var user = firebase.auth().currentUser;
        

        if(usersAttendingg){
        usersAttendingg.push(user.email)}
        else{
            usersAttendingg =[]
            usersAttendingg.push(user.email)
        }
        eventRef.child(key).child('usersattending').set(usersAttendingg)

       }
       notGoing(key,usersAttendingg)  {
        var user = firebase.auth().currentUser;
       
        if(usersAttendingg){
        var usersAttend = usersAttendingg.filter(function(value){
            return value != user.email
        })
        eventRef.child(key).child('usersattending').set(usersAttend)
    }
        //console.log(key+ usersAttend)



        
        
        

       }
       
       DeleteFunction(key,usersList)  {
        var user = firebase.auth().currentUser;
        if (usersList[0]==user.email){
        eventRef.child(key).remove();
        
        }
        
       }

       EditFunction(key,usersList)  {
        var user = firebase.auth().currentUser;
        name = this.props.navigation.getParam('item')
        if (usersList[0]==user.email){
          this.props.navigation.navigate('EditPage', {name:name});
        }

        
       }
    

    
    
    render(){
      name = this.props.navigation.getParam('item')
        console.log(name)
        return(
            

            <View style={styles.container}>


<Text style={styles.item}>"Key: "{name.key}</Text>
                        <Text style={styles.item}>"Name: "{name.name}</Text>
                        <Text style={styles.item}>"Time: " {name.time}</Text>
                        <Text style={styles.item}>"Location: "{name.location}</Text>
                        <Text style={styles.item}>"UsersAttending: "{name.usersAttending}</Text>



                        <TouchableOpacity
         style={styles.button}
         onPress ={() => this.Going(name.key,name.usersAttending)}
       >
         <Text> Going </Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={styles.button}
         onPress ={() => this.notGoing(name.key,name.usersAttending)}
       >
         <Text> Not going </Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={styles.button}
         onPress ={() => this.DeleteFunction(name.key,name.usersAttending)}
       >
         <Text> Delete</Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={styles.button}
        onPress ={() => this.EditFunction(name.key,name.usersAttending)}
       >
         <Text> Edit</Text>
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
  

export default EventPage

