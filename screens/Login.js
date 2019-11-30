import React from 'react'
import { StyleSheet, Text} from 'react-native'
import  firebase from '../firebase';
import {Container,Input,Item,Button,Label,Form} from 'native-base';

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  
  

 

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Events'))
      .catch(error => this.setState({ errorMessage: 'Sorry, Bad username or password' }))

      
      
    }

  

 
  render() {
    return (
     
       

          <Container style = {styles.container}>
             <Text style = {styles.text}>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
            <Form style = {styles.form}>
            <Item floatingLabel>
                <Label>Email</Label>
                  <Input
                    autoCorrect ={false}
                    autoCapitalization = "none"
                    onChangeText = {(email) => this.setState({email})}
                  />
            </Item>
            <Item floatingLabel>
                  <Label>Password</Label>
                  <Input
                    autoCorrect ={false}
                    autoCapitalization = "none"
                    secureTextEntry = {true}
                    onChangeText = {(password) => this.setState({password})}
                  />
            </Item>

            <Button style ={{marginTop:10}}
              full
              rounded
              onPress={this.handleLogin}>
                <Text style = {{color:'white'}}>Login</Text>
            </Button>

            <Button style ={{marginTop:10}}
               full
               rounded
               success
               onPress = {()=>{this.props.navigation.navigate('SignUp')}}>

                <Text style = {{color:'white'}}>Don't have an account? Sign Up</Text>
            </Button>

            </Form>

        </Container>


       
      
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
    

    
  },
  text:{
   
    padding:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
  form:{
   
    padding:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  }

})