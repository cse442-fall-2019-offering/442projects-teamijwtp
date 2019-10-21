import {View,StyleSheet,Text,StatusBar} from 'react-native';
import React, { Component } from 'react';
import {Content,Header,Input,Item,Button,Icon} from 'native-base'
import { FlatList } from 'react-native-gesture-handler';




 class GroupPage extends Component{
  
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style = {styles.container}>

                        <Header style = {styles.header}>

                            <Content>

                                <Item>
                
                                    <Input
                                        placeholder = "Add group"
                                    />
                                    <Button 
                                        onPress = {()=>{navigate('GroupForm')}}>
                                        <Icon name = 'add'/>
                                    </Button>

                                </Item>

                            </Content>

                        </Header>


                        <FlatList
                            data={[
                                
                        
                                {key: 'These'},
                                {key: 'are'},
                                {key: 'place'},
                                {key: 'holders'},
                                {key: 'ignore'},
                                {key: 'stop'},
                                {key: 'reading'},
                                {key: 'n'},
                                {key: 'o'},
                                {key: 'w'},
                                {key: '.'},
                                {key: 'These'},
                                {key: 'are'},
                                {key: 'place'},
                                {key: 'holders'},
                                {key: 'ignore'},
                                {key: 'stop'},
                                {key: 'reading'},
                                {key: 'n'},
                                {key: 'o'},
                                {key: 'w'},
                                {key: '.'},
            
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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

export default GroupPage