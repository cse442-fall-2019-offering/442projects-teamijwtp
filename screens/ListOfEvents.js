import {View,StyleSheet,Text,FlatList} from 'react-native';
import React, { Component } from 'react';
import {Header,Icon} from 'native-base'
import { TouchableOpacity} from 'react-native-gesture-handler';
import  firebase from '../firebase';






var eventsRef = firebase.database().ref('events')


export default class ListOfEvents extends Component{
 
    constructor(props){
        super(props);

        this.state ={
            dataSource:[]
        }

    }


    componentDidMount() {
        // start listening for firebase updates
        this.listenForTasks(this.tasksRef);
      }

      listenForTasks() {
        eventsRef.on("value", dataSnapshot => {
          var tasks = [];
          dataSnapshot.forEach(child => {
            tasks.push({
              name: child.val().name,
              key: child.key,
              time: child.val().time,
              location:child.val().location,
              description:child.val().description,
              usersAttending:child.val().usersattending,
              owner: child.val().owner
            });
          });

          this.setState({
            dataSource: tasks
          });
        });
      }

      renderItem =({item}) =>{
        return <View style = {styles.item}>
          
          <TouchableOpacity style={styles.itemButton} 
                  onPress= {()=>{


                    this.props.navigation.navigate('EventPage', {item:item})

                  }}>
                  <Text allowFontScaling adjustsFontSizeToFit minimumFontScale={.5} style = {styles.text}>{"Event Name: "+item.name +"\n" + "Event Location: " + item.location+ "\n"+ "Event Time: "+
                  item.time  }</Text>
                  </TouchableOpacity>
              </View>
      }

    render(){
        const {navigate} = this.props.navigation;
      
          
      
        return(

              <View style = {styles.contentContainer}>
                    <Header style = {styles.header}>



  

                    <TouchableOpacity 
                           onPress = {()=>{firebase.auth().signOut().then(function() {
                            // Sign-out successful.
                          }).catch(function(error) {
                            // An error happened.
                          });;navigate('Login')}}>
       
                           <Icon name = 'ios-person' size={40}/>
                     </TouchableOpacity>
                     <Text style = {styles.textHeader}>PUBLIC EVENTS</Text>
                     <TouchableOpacity
                        onPress = {()=>{navigate('EventForm');var user= firebase.auth().currentUser;(user)}}>
                        <Icon name = 'ios-add' size={50}/>
                        </TouchableOpacity>



</Header>

                    <FlatList
                       
                       data={this.state.dataSource}
                      
                        renderItem={this.renderItem}


                    />



              </View>





          
        );
    }




}

const styles = StyleSheet.create({
   contentContainer:{
    backgroundColor:'white',
    
       

       
    },
    textHeader:{
    
      fontSize:20,
      fontWeight:'bold',
    
    },
    item: {
     
    
        
      },
      itemButton: {
        alignItems:'center',
        flexDirection:'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
          borderBottomWidth:1,
          borderBottomColor:'grey',
          width:'100%'

          
                  
         
        },
    text:{
      marginVertical:20,
      fontSize:15,
      marginLeft:10,
      fontWeight:'bold',
      
    },
    marginLeft:{
      marginLeft:5,
    },
    menu:{
      width:20,
      height:2,
      backgroundColor :'#111',
      borderRadius:3
    },
    headerText:{
      fontSize:20,
      fontWeight:'bold',
      color:'white'
    },
    header:{
      height:60,
      backgroundColor:'grey',
      alignItems:'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderTopWidth: 0 
     
      
    },
    button:{
      width :100
    }






});
