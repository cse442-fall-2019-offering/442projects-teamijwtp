import React from 'react'
import { StyleSheet, Text} from 'react-native'
import  firebase from '../firebase';
import {Container,Input,Item,Button,Label,Form} from 'native-base';
export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
handleSignUp = () => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.props.navigation.navigate('Events'))
    .catch(error => this.setState({ errorMessage: error.message }))
}

render() {
  return (
   
     

        <Container style = {styles.container}>
           <Text style = {styles.text}>SignUp</Text>
      {this.state.errorMessage &&
        <Text style={{ color: 'red' }}>
          {this.state.errorMessage}
        </Text>}
          <Form style = {styles.form}>
          <Item floatingLabel>
              <Label> Enter a Email</Label>
                <Input
                  autoCorrect ={false}
                  autoCapitalization = "none"
                  onChangeText = {(email) => this.setState({email})}
                />
          </Item>
          <Item floatingLabel>
                <Label>Enter a Password</Label>
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
            onPress={this.handleSignUp}>
              <Text style = {{color:'white'}}>SignUp</Text>
          </Button>

          <Button style ={{marginTop:10}}
             full
             rounded
             success
             onPress = {()=>{this.props.navigation.navigate('Login')}}>

              <Text style = {{color:'white'}}>Already have an account? LogIn</Text>
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