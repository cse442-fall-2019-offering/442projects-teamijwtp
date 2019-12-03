import { createAppContainer } from 'react-navigation';
<<<<<<< HEAD
import { createStackNavigator } from 'react-navigation-stack';
import Login from "./Login";
import  GroupForm from "./GroupForm";
import  GroupPage from "./GroupPage";




const NavStack = createStackNavigator({
    Login:{
        screen:Login
    },
    GroupPage:{
        screen:GroupPage
    },
    GroupForm:{
        screen:GroupForm
    },

})

export default Routes = createAppContainer(NavStack);
=======
import { createStackNavigator} from 'react-navigation-stack';
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import React from 'react';
import  EventForm from "./screens/EventForm";
import groupFunctions from "./screens/groupFunctions"
import  ListOfEvents from "./screens/ListOfEvents";
import  ListOfGroups from "./screens/ListOfGroups";
import  groupEventForm from "./screens/groupEventForm";
import  groupChatScreen from "./screens/groupChatScreen";
import  eventChatScreen from "./screens/eventChatScreen";
import  GroupOwnerGroupDetails from "./screens/GroupOwnerGroupDetails";
import  EventPage from "./screens/EventPage"
import  EditPage from "./screens/EditPage"
import  CreateGroup from "./screens/CreateGroup"
import PendingUser from "./screens/PendingUser"
import  GroupDetails from "./screens/GroupDetails"
import  NotInGroup from "./screens/NotInGroup"
import  PendingRequest from "./screens/PendingRequest"
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';

   



const EventStack = createStackNavigator({
    Events:{
        screen:ListOfEvents
    },
    EventForm:{
        screen:EventForm
    },
    EventPage:{
        screen:EventPage
    },
    EditPage:{
        screen:EditPage ///needs updating
    },
    
    
})
const Loginstack = createStackNavigator({
   
   
    Login:{
        screen:Login,
        
    },
    SignUp:{
        screen:SignUp
    },
    
   
    
    
    
   
})

Loginstack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = false;
    
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
    
  
    return {
      tabBarVisible,
    };
  }
const GroupStack = createStackNavigator({
    Groups:{
        screen:ListOfGroups
    },
    groupChatScreen:{
        screen:groupChatScreen
    },
    eventChatScreen:{
        screen:eventChatScreen
    },
   groupEventForm:{
        screen:groupEventForm
    },
    EventPage:{
        screen:EventPage
    },
    CreateGroup:{
        screen:CreateGroup
    },
    groupFunctions:{
        screen:  groupFunctions
    },
    GroupDetails:{
        screen:GroupDetails
    },
    NotInGroup:{
        screen:NotInGroup
    },
    GroupOwnerGroupDetails:{
        screen:GroupOwnerGroupDetails
    },
    PendingRequest:{
        screen:PendingRequest
    },
    PendingUser:{
        screen:PendingUser
    },
    
})
export default createAppContainer(
   
    createBottomTabNavigator(
      {
        Login:{screen:Loginstack,

            navigationOptions:{  
                
                tabBarIcon:({tintColor})=>(  
                    <Icon name='ios-log-in' color={tintColor} size={25}
                    />  
                )  
              }  
            },  
            






            Events:{screen:EventStack,

                navigationOptions:{  
                    
                    tabBarIcon:({tintColor})=>(  
                        <Icon name='ios-list' color={tintColor} size={25}/>  
                    )  
                  }  
                },  
                Groups:{screen:GroupStack,

                    navigationOptions:{  
                        
                        tabBarIcon:({tintColor})=>(  
                            <Icon name='ios-people' color={tintColor} size={25}/>  
                        )  
                      }  
                    }, 
                     
      },
     
          
        )
      );
>>>>>>> develop3
