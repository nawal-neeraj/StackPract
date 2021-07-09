import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import  DrawerHeader  from "../components/DrawerHeader";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import Profile from '../screens/Profile';
import Game from '../screens/Game';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Routes() {

  function DrawerContetn(props){
    return (
      <DrawerContentScrollView {...props}>
        <DrawerHeader {...props}></DrawerHeader>
        <DrawerItemList {...props}></DrawerItemList>
        <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('Profile')}
        ></DrawerItem>
      <DrawerItem
        label="Game"
        onPress={() => props.navigation.navigate('Game')}
        ></DrawerItem>
      </DrawerContentScrollView>
    )
  }

  const HomeRouter =() =>{
    return (
      <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home" 
      drawerContent = {(props) => <DrawerContetn {...props}></DrawerContetn>}>
        <Drawer.Screen name="Home"
        component={Home}>
        </Drawer.Screen>
      </Drawer.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeRouter} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Game" component={Game}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
