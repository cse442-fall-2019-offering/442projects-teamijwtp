import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={{
      paddingTop: 150,
      paddingLeft:100,
      paddingRight:20, 
      }}>
      
      <Text 
      style ={{
        borderColor: 'white',
        width: 100,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 25

      }} >
         Feed
      </Text>
      
      

      <View style= {{
      width: 300, 
      height:70,
      paddingTop:10,
      paddingBottom:20,
      paddingLeft:0,
      paddingRight:100 
      
      
      }}>  
      <Button 
      title = "Food"
      color= 'red'
      onPress={() => Alert.alert('N/A at the moment')}
      />
      </View>
     
      <View style= {{
      width: 300, 
      height:70,
      paddingTop:10,
      paddingBottom:20,
      paddingLeft:0,
      paddingRight:100
      }}>  
      <Button 
      title = "Drinks" 
      color= 'orange'
      onPress={() => Alert.alert('N/A at the moment')}
      />
      </View>
     
      <View style= {{
     width: 300, 
     height:70,
     paddingTop:10,
     paddingBottom:20,
     paddingLeft:0,
     paddingRight:100
      }}>  
      <Button 
      title = "Gym"
      color= 'green'
      onPress={() => Alert.alert('N/A at the moment')}
      />
      </View>

      <View style= {{
     width: 300, 
     height:70,
     paddingTop:10,
     paddingBottom:20,
     paddingLeft:0,
     paddingRight:100
      }}>  
      <Button 
      title = "Study" 
      color= 'purple'
      onPress={() => Alert.alert('N/A at the moment')}
      />
      </View>

      <View style= {{
      width: 300, 
      height:70,
      paddingTop:10,
      paddingBottom:20,
      paddingLeft:0,
      paddingRight:100
      }}>  
      <Button 
      title = "Shop" 
      color= '#00f5ff'
      onPress={() => Alert.alert('N/A at the moment')}
      />
      </View>

      <View style= {{
      width: 300, 
      height:70,
      paddingTop:10,
      paddingBottom:20,
      paddingLeft:0,
      paddingRight:100
      }}>  
      <Button 
      title = "Other"
      onPress={() => Alert.alert('N/A at the moment')} 
      />
      </View>
     


    </View>
  );
}

const styles = StyleSheet.create({
 
});
