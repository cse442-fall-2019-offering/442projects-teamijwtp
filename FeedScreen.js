import React from 'react';
import { Platform, StyleSheet, TextInput, View, Text , TouchableOpacity} from 'react-native';

import HomeButton from './HomeButton';
import ChatButton from './ChatButton';
import SettingButton from './SettingButton';
import MenuItem from './components/MenuItem';

export default function FeedScreen() {
  const [value, onChangeText] = React.useState('Enter Group Code');
  return (

    <View style={styles.container}>
    <Text style={styles.normText}> Hello, please select a category to begin </Text>
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
        </View>



        <View style = {styles.buttonContainer}>
        <TouchableOpacity style = {styles.buttons}>
          <Text style ={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttons}>
          <Text style ={styles.buttonText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.buttons}>
          <Text style ={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0


  },
  buttons:{
  backgroundColor:"#ffffff",
  padding:15,
  width: "35%",
  borderWidth: 0.5,

},
buttonText:{
  fontSize :18,
  textAlign : "center"
},
  menu:{
    height:'75%',
    width: '75%',
    justifyContent: "space-between",
    flexDirection:'row',
    flexWrap: 'wrap',
    paddingBottom:20,
  },

  buttonContainer:{
    width: '100%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,


  },

  normText: {
    fontSize:20,
    color: 'black',
    flexDirection:'row',
  },
  revText: {
   color: 'white',
   flexDirection:'row-reverse',
 }

});
