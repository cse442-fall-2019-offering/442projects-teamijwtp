import {View,StyleSheet,Text,StatusBar,List,SafeAreaView} from 'react-native';
import React, { Component } from 'react';
import {Content,Header,Input,Button,Icon, ListItem,Item} from 'native-base'
import { FlatList, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import  firebase from './firebase';
import  EventPage from './EventPage';
import CreateGroup from './CreateGroup';



var arr =[]
var tasksRef = firebase.database().ref('groups')
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
        tasksRef.on("value", dataSnapshot => {
          var tasks = [];
          dataSnapshot.forEach(child => {
            tasks.push({
              name: child.val().name,
              key: child.key,
              Key: child.val().Key,
              members:child.val().members
              //time: child.val().time,
            //  location:child.val().location,
              //usersAttending:child.val().usersattending
            });
          });
    
          this.setState({
            dataSource: tasks
          });
        });
      }

                         
      enter = (item) =>{
        var user = firebase.auth().currentUser;
        var arr = item.members
        var bool = false;
        for (i = 0; i < arr.length; i++) {
            if(arr[i]==user.email){
                bool = true;
                this.props.navigation.navigate('GroupDetails', {item:item})
            }
          }
       
        if(bool==false){
            
                this.props.navigation.navigate('NotInGroup')
            }
    }

            
              
          

          




      
        
        
          
         
         
        
             



          
         
         
        
             






        

    
    
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style = {styles.container}>

                        <Header style = {styles.header}>

                            <Content>

                                <Item>
                
                                    <Input
                                        placeholder = "Add Group"
                                    />
                                    <Button 
                                        onPress = {()=>{navigate('CreateGroup');var user= firebase.auth().currentUser;
                                        (user)}}>
                                        <Icon name = 'add'/>
                                    </Button>

                                </Item>

                            </Content>

                        </Header>



                       <FlatList
                        
          data={this.state.dataSource}
          renderItem={({item}) => <TouchableOpacity style={styles.item}
          onPress ={() => this.enter(item)}
          
         /* onPress= {()=>{
            

            navigate('GroupDetails', {item:item})

          }}*/>
          <Text style = {styles.item}>{item.name}</Text>
          </TouchableOpacity >}
        />


                        
                        
                        
                        
                        


                     

 




                        

            </View>
             

        );
    }




}

const styles = StyleSheet.create({
   container:{
       flex:1,
      
       padding:10,
    },
    header:{
        backgroundColor:'white',
        marginTop:StatusBar.currentHeight
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
 

    
    
    
    
});

