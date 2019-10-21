import {StyleSheet,Text} from 'react-native';
import React, { Component } from 'react';
import  firebase from './firebase';
import {Container,Input,Item,Button,Label,Form} from 'native-base'


class Login extends Component{


    constructor(props){
      super(props)


      this.state = ({
            email: '',
            password:''

      })
    }


    signUpUser = (email,password) =>{

        try{
          firebase.auth().createUserWithEmailAndPassword(email,password)

        }

        catch(error){
          console.log(error.toString())
        }

    }
    logInUser = (email,password) =>{
      try{
        firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
          console.log(user)

        })
      }
      catch(error){
        console.log(error.toString())
      }


    }

    render(){
      const {navigate} = this.props.navigation;
        return(

        <Container styles = {styles.container}>

          <Form>

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
              onPress = {()=>{navigate('GroupPage'); this.logInUser(this.state.email,this.state.password)}}
              >
                <Text style = {{color:'white'}}>Login</Text>
            </Button>

            <Button style ={{marginTop:10}}
               full
               rounded
               success
               onPress = {()=>{ navigate('GroupPage');this.signUpUser(this.state.email,this.state.password)}}>

                <Text style = {{color:'white'}}>SignUp</Text>
            </Button>


          </Form>

        </Container>


        );


    }



}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',

    padding:20
  },


});

export default Login