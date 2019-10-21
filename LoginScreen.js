import React, {Component} from 'react';
import { StyleSheet , Text, View,TextInput, TouchableOpacity } from 'react-native';

class LoginScreen extends Component{

    render(){
      return(

        <View style = {styles.container}>

          <Text style={styles.welcome}> Welcome </Text>

          <TextInput style= {styles.input} placeholder = "Enter Username"  />
          <TextInput style= {styles.input}  placeholder = "Enter Password" secureTextEntry/>

          <View style = {styles.buttonContainer}>
            <TouchableOpacity style = {styles.buttons} onPress = {() => this.props.navigation.navigate('HomeScreen')}>
              <Text style ={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.buttons}>
              <Text style ={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container:{
    flex :1,
    backgroundColor : 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcome:{
    fontSize :50,
    margin : 10,
    textAlign: 'center',
    color: "black",
  },
  input:{
    width :"90%",
    backgroundColor : "#fff",
    padding: 15,
    marginBottom:10,
    borderWidth:1
  },
  buttons:{
    backgroundColor:"red",
    padding:15,
    width: "35%"

  },
  buttonText:{
    fontSize :18,
    textAlign : "center"
  },
  buttonContainer:{
    flexDirection:"row",
    justifyContent: "space-between",
    width: "90%"
  }
});
