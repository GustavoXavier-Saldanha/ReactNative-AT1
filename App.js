import React from 'react';
import {View, StyleSheet } from 'react-native';
import Capa from './src/screen/screen1'
import Home from './src/screen/screen2'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { Entypo, Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons';



export default function App() {

  const Tab = createBottomTabNavigator()



  const icons = {
    Home: {
      name: <Feather name="home" color="#d5e1ed" size={25} />
    },
    Store: {
      name: <SimpleLineIcons name="bag" color="#d5e1ed" size={25} />
    },
    Channel: {
      name: <Entypo name="list" color="#d5e1ed" size={25} />
    },
    Search: {
      name:  <Feather name="search" color="#d5e1ed" size={25} />
    },
    Profile: {
      name:  <Ionicons name="person-circle" color="#d5e1ed" size={25} />
    }
  }


  return (
    
      <NavigationContainer >
        <Tab.Navigator tabBarOptions={{style:{backgroundColor: '#000', borderTopWidth:1, borderTopColor: '#000', height: 50}}} screenOptions={({ route }) => ({
        
        tabBarIcon: () => {
          const {name} = icons[route.name]
        return <View> {name} </View> 
        }


        })
      }>
          <Tab.Screen name="Home" component={Home} style={styles.titulo}></Tab.Screen>
          <Tab.Screen name="Store" component={Home}></Tab.Screen>
          <Tab.Screen name="Channel" component={Home}></Tab.Screen>
          <Tab.Screen name="Search" component={Capa}></Tab.Screen>
          <Tab.Screen name="Profile" component={Capa}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  navBar:{
   backgroundColor: '#000000'    
  },

  titulo:{
    fontSize: 16
  }
});
