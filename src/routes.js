import React from "react"
import {Text} from './components'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from "./pages/home";
import Sinup from "./pages/Sinup";
import Signin from "./pages/Signin";
import Feed from "./pages/Feed";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerComponents=()=>{
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}






const Routes = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
            <Stack.Screen options={{headerShown:false}} name="Signin" component={Signin} />
            <Stack.Screen options={{headerShown:false}} name="Sinup" component={Sinup} />
            <Stack.Screen options={{headerShown:false}} name="Feed" component={Feed} />

            </Stack.Navigator>

        </NavigationContainer>
    )

}

export default Routes