import {View,StyleSheet,Text,StatusBar,List,SafeAreaView} from 'react-native';
import React, { Component } from 'react';
import {Content,Header,Input,Button,ListItem,Item} from 'native-base'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import  firebase from '../firebase';
import Icon from 'react-native-vector-icons/Ionicons';




       

class  GroupOwnerGroupDetails extends Component{

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
  name = this.props.navigation.getParam('item')
  const rootRef = firebase.database().ref().child('groups').child(name.key).child('events');
  rootRef.on("value", dataSnapshot => {
    var tasks = [];
    dataSnapshot.forEach(child => {
      tasks.push({
        name: child.val().name,
        time: child.val().time,
        key: child.key,
        location:child.val().location,
        usersAttending:child.val().usersattending,
        owner: child.val().owner,
        description:child.val().description
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


              this.props.navigation.navigate('eventChatScreen', {item:item})

            }}>
            <Text allowFontScaling adjustsFontSizeToFit minimumFontScale={.5} style = {styles.text}>{"Event Name: "+item.name + "\n" + "Event Location: " + item.location+ "\n" + "Event Time: "+
                  item.time  }</Text>
            </TouchableOpacity>
        </View>
}

    


    render(){
      name = this.props.navigation.getParam('item')
      const {navigate} = this.props.navigation;
        return(


            <View style={styles.container}>

                  <Header style = {styles.header}>




                  <TouchableOpacity
                        onPress= {()=>{


                            navigate('PendingRequest', {name:name})
       
                         }}>
                        <Icon name='ios-mail-unread' size={40}/>  
                        </TouchableOpacity>

                          
                            <Text style = {styles.textHeader}>{name.name}</Text>
                          

                        <TouchableOpacity
                                 onPress = {()=>{navigate('groupEventForm',{name:name});var user= firebase.auth().currentUser;(user)}}>

                                 <Icon name = 'ios-add' size={40}/>
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


export default GroupOwnerGroupDetails