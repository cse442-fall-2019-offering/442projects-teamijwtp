import React from 'react';
import { Platform, TouchableOpacity,StyleSheet, TextInput, View, Text } from 'react-native';
import{createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import FeedScreen from './FeedScreen';


const MainAppStack = createStackNavigator({
  LoginScreen:{ screen : LoginScreen},
  FeedScreen:{ screen : FeedScreen}

});

const App = createAppContainer(MainAppStack);
export default App;
