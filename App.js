import React, {Component} from 'react';
import { Platform, TouchableOpacity,StyleSheet, TextInput, View, Text } from 'react-native';
import{createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Firebase from "firebase";
import Config from "./config";


const MainAppStack = createStackNavigator({
  LoginScreen:{ screen : LoginScreen},
  HomeScreen:{ screen : HomeScreen}

});

const App = createAppContainer(MainAppStack);
export default App;
