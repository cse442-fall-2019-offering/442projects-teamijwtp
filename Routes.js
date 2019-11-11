import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "./Login";
import  EventForm from "./EventForm";
import  ListOfEvents from "./ListOfEvents";
import  ListOfGroups from "./ListOfGroups";
import  EventPage from "./EventPage"
import  EditPage from "./EditPage"
import  CreateGroup from "./CreateGroup"
import  GroupDetails from "./GroupDetails"
import  NotInGroup from "./NotInGroup"
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
        Login:Loginstack,
        Events: EventStack,
        Groups:GroupStack,
      },
      {
        initialRouteKey:Loginstack
      }
      
    )
  );;

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