import {View,Text,StyleSheet} from "react-native";
import { GiftedChat } from 'react-native-gifted-chat'
import { TouchableOpacity} from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {Header,Icon} from 'native-base'
import React, {Component} from 'react';
import  firebase from '../firebase';


class groupChatScreen extends Component{

    constructor(props){
        super(props)


    }

    state = {
        messages: []
    }

    get user(){
        return {
            _id : firebase.auth().currentUser.email,
            name : firebase.auth().currentUser.email
        }
    }
    componentDidMount(){
        this.get(message => 
            this.setState(previous =>({

                messages: GiftedChat.append(previous.messages,message)
            }))
            );
    }

    componentWillUnmount(){
        this.off();
    }

    send = messages => {
        messages.forEach(item => {
          const message = {
            text:item.text,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            user:item.user
          };
          this.db.push(message);
        });
      };

      get = callback =>{
          this.db.on("child_added",snapshot => callback(this.parse(snapshot)));
      }
      off(){
          this.db.off()
      }

      parse = message =>{

        const { user, text, timestamp} = message.val();
        const {key:_id} = message;
        const createdAt = new Date(timestamp);

        return{
            _id,createdAt,text,user
        }

      }
    
      get db() {
         name = this.props.navigation.getParam('item')
         
          return firebase.database().ref("messages").child(name.key)
      }

      groupDetails = (item) =>{
        var arr = item.members
        var bool = false;
        var user = firebase.auth().currentUser;
        if(item.owner[0]==user.email){
          this.props.navigation.navigate('GroupOwnerGroupDetails', {item:item})
            return
        }
        for (i = 0; i < arr.length; i++) {
            if(arr[i]==user.email){
                bool = true;
                this.props.navigation.navigate('GroupDetails', {item:item})
            }
          }

        if(bool==false){

                this.props.navigation.navigate('NotInGroup', {item:item})
        }
    }



     
    



     





    render(){
        name = this.props.navigation.getParam('item')
        const chat = <GiftedChat messages = {this.state.messages} onSend ={this.send} renderUsernameOnMessage ={true} user ={this.user}/>

        
            return(
                <View style={{flex: 1}}>
                    <Header style = {styles.header}>



  

<TouchableOpacity 
       onPress = {() => this.props.navigation.navigate('groupFunctions',{item:name})}>

       <Icon name = 'ios-information-circle-outline' size={40}/>
 </TouchableOpacity>
 <Text style = {styles.textHeader}>{name.name+ " Chat"}</Text>
 <TouchableOpacity
    onPress = {() => this.groupDetails(name)}>
    <Text style = {styles.textHeader}>Events</Text>
    </TouchableOpacity>



</Header>
               {chat}
                <KeyboardSpacer/>
              </View>
            )
        
       



            return <SafeAreaView style ={{flex:1}}>{chat}</SafeAreaView>


























        
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
 



export default groupChatScreen