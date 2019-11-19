import {View,StyleSheet,Text,StatusBar,List,SafeAreaView} from 'react-native';
import React, { Component } from 'react';
import {Content,Header,Input,Button,Icon, ListItem,Item} from 'native-base'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import  firebase from './firebase';


class NotInGroup extends Component{

    constructor(props){
        super(props)


    }
    
    render(){


        return(


            <View style={styles.container}>


                        <Text style={styles.item}>Sorry, Please ask group owner to join this group.</Text>
                            

                            <Item>

                                <Button>
                                    <Icon name = 'Join'/>
                                </Button>

                            </Item>








      </View>


























        );
    }




}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
    },
    item: {
        alignItems: 'center',
        //backgroundColor: '#DDDDDD',
        padding: 10,
        justifyContent: 'center',
      },
  });


export default NotInGroup
