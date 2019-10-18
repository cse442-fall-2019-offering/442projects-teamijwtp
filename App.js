import React from 'react';
import { Platform, StyleSheet, TextInput, View, Text } from 'react-native';

import HomeButton from './HomeButton';
import ChatButton from './ChatButton';
import SettingButton from './SettingButton';
import MenuItem from './components/MenuItem';
import EventTable from './components/EventTable';

export default function App()  {
    this.SampleNameArray = [
      'Goa',
      'Gujrat',
      'Madhya Pradesh',
      'Assam',
      'Gujrat',
      'Karnataka',
      'Jharkhand',
      'Himachal Pradesh',
      'Manipur',
      'Meghalaya',
      'Mizoram',
      'Uttarakhand',
      'West Bengal',
      'Tamil Nadu ',
      'Punjab',
      'Rajasthan',
      'Bihar',
      'Andhra Pradesh',
      'Arunachal Pradesh',
    ];
  const [value, onChangeText] = React.useState('Enter Group Code');
  return (
    
    <View style={styles.container}>
   {/*
    <Text style={styles.normText}> Feed will go here </Text>
      <TextInput
      style={styles.revText}
      onChangeText={text => onChangeText(text)}
      value={value}
       />
      
        <View style={styles.menu}> 
          <MenuItem itemImage={require('./icons/eat.png')} fnc={()=>alert("food")} />
          <MenuItem itemImage={require('./icons/gym.png')} fnc={()=>alert("gym")} />
          <MenuItem itemImage={require('./icons/alc.png')} fnc={()=>alert("beer")} />
          <MenuItem itemImage={require('./icons/study.png')} fnc={()=>alert("study")} />
          <MenuItem itemImage={require('./icons/shop.png')} fnc={()=>alert("shop")}/>
          <MenuItem itemImage={require('./icons/other.png')} fnc={()=>alert("other")}/>
        </View>*/}
        <View style ={styles.testing}>
          <EventTable eventDescription={"Des"} eventLocation={"Loc"} eventTime={"SampleTime"} eventNames={SampleNameArray} />
        </View>
        
        <View style={ styles.bottomView} >
                  <HomeButton />

                  <ChatButton />

                  <SettingButton />
         </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  flexDirection: 'row',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0


  },
  menu:{
    height:'80%',
    flexDirection:'row',
    flexWrap: 'wrap',
  },
  testing:{
    height:'20%',
  },
  bottomView:{
    width: '100%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#6495ed',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },

  normText: { 
     color: 'white',
    flexDirection:'row', 
  },
  revText: {
   color: 'white',
   flexDirection:'row-reverse', 
 }

});
