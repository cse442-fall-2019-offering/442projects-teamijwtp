import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "./Login";
import  GroupForm from "./GroupForm";
import  GroupPage from "./GroupPage";
import  EventPage from "./EventPage";



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
    EventPage:{
        screen:EventPage
    }

})

export default Routes = createAppContainer(NavStack);
