import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "./Login";
import React, {Component} from 'react';
import  EventForm from "./EventForm";
import  ListOfEvents from "./ListOfEvents";
import  ListOfGroups from "./ListOfGroups";
import  EventPage from "./EventPage"
import  EditPage from "./EditPage"
import  CreateGroup from "./CreateGroup"
import  GroupDetails from "./GroupDetails"
import  NotInGroup from "./NotInGroup"
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
        screen:EditPage
    },
})
const Loginstack = createStackNavigator({
    Login:{
        screen:Login
    },
   
})
const GroupStack = createStackNavigator({
    Groups:{
        screen:ListOfGroups
    },
    CreateGroup:{
        screen:CreateGroup
    },
    GroupDetails:{
        screen:GroupDetails
    },
    NotInGroup:{
        screen:NotInGroup
    },
})
export default createAppContainer(
    createBottomTabNavigator(
      {
        Login:{screen:Loginstack,

            navigationOptions:{  
                
                tabBarIcon:({tintColor})=>(  
                    <Icon name='ios-log-in' color={tintColor} size={25}/>  
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
      {
       
        
            /* Other configuration remains unchanged */
          }
        )
      );

/*const Routeconfigs = createStackNavigator({
    Login:{
        screen:Login
    },
    GroupPage:{
        screen:GroupPage
    },
    GroupForm:{
        screen:GroupForm
    },
    EventPage:{
        screen:EventPage
    }

})
export default Routes = createAppContainer(NavStack);*/