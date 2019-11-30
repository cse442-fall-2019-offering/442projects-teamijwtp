import {View,StyleSheet,Text,StatusBar,List,SafeAreaView} from 'react-native';
import React, { Component } from 'react';
import {Content,Header,Input,Button,Icon, ListItem,Item} from 'native-base'
import { FlatList, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import  firebase from '../firebase';




var groupRef = firebase.database().ref('groups')
//var user = firebase.auth().currentUser;
 export default class ListOfGroups extends Component{

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
        groupRef.on("value", dataSnapshot => {
          var tasks = [];
          dataSnapshot.forEach(child => {
            tasks.push({
              name: child.val().name,
              key: child.key,
              token: child.val().token,
              owner: child.val().owner,
              members:child.val().members,
              pendingusers: child.val().pendingusers

              
            });
          });

          this.setState({
            dataSource: tasks
          });
        });
      }


      isInGroup = (item) =>{
        var arr = item.members
        var bool = false;
        var user = firebase.auth().currentUser;
        if(item.owner[0]==user.email){
          this.props.navigation.navigate('groupChatScreen', {item:item})
            return
        }
        for (i = 0; i < arr.length; i++) {
            if(arr[i]==user.email){
                bool = true;
                this.props.navigation.navigate('groupChatScreen', {item:item})
            }
          }

        if(bool==false){

                this.props.navigation.navigate('NotInGroup', {item:item})
        }
    }

    renderItem =({item}) =>{
      return <View style = {styles.item}>
        
        <TouchableOpacity style = {styles.itemButton}
                      onPress ={() => this.isInGroup(item)}

                   >

                      <Text allowFontScaling adjustsFontSizeToFit minimumFontScale={.5} style = {styles.text}>{"Event name: " + item.name+"\n" +"Number of members: " +item.members.length}</Text>
                   </TouchableOpacity >
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
                     <Text style = {styles.textHeader}>GROUPS</Text>
                     <TouchableOpacity
                        onPress = {()=>{navigate('CreateGroup');var user= firebase.auth().currentUser;(user)}}>
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
      backgroundColor: 'white',
      

      
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
   textHeader:{
    
    fontSize:20,
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
     flexDirection: 'row'
     
   }






});