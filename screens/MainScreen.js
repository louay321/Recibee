
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ViewPager from '@react-native-community/viewpager';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SearchScreen from './SearchScreen';
import HomeScreen from './HomeScreen';
import AddScreen from './AddScreen';
const Tab = createBottomTabNavigator();

export default function MainScreen({navigation}) {
  return (
    
      <Tab.Navigator tabBarOptions={{
        inactiveBackgroundColor:'#96E6A1',
        inactiveTintColor:'#444',
        activeTintColor:'#fff',
        activeBackgroundColor:'#96E6A1',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({color})=> <MaterialCommunityIcons name='home' size={35} color={color}/> }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{tabBarIcon: ({color})=> <MaterialCommunityIcons name='food' size={35} color={color}/> }}/>
        <Tab.Screen name="Add" component={AddScreen} options={{tabBarIcon: ({color})=> <MaterialCommunityIcons name='plus' size={35} color={color}/> }}/>
      </Tab.Navigator>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  button:{
    width:50,
    height:50,
    backgroundColor:'red',
  },
  frame:{
    width:'100%',
    height:66,
    bottom:100,
    position:'absolute',
    backgroundColor:'#96E6A1',
  },
});
