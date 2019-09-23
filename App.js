import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 120}}>
      
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
      width: 200, 
      height:80,
     
     
      }}>  
      <Button title = "Food" 
     
      />
      </View>
     
      <View style= {{
      width: 200, 
      height:80, 
      
      }}>  
      <Button title = "Drinks" />
      </View>
     
      <View style= {{
      width: 200, 
      height:80, 
      }}>  
      <Button title = "Gym" />
      </View>
      <View style= {{
      width: 200, 
      height:80, 
      }}>  
      <Button title = "Study" />
      </View>
      <View style= {{
      width: 200, 
      height:80, 
      }}>  
      <Button title = "Shop" />
      </View>
      <View style= {{
      width: 200, 
      height:80, 
      }}>  
      <Button title = "Other" />
      </View>
     


    </View>
  );
}

const styles = StyleSheet.create({
 
});
