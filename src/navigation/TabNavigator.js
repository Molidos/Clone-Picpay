import React from 'react'
import HomeStack from './HomeStack'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Wallet from '../Screens/Wallet/Wallet'
import ButtonPayMenu from '../components/ButtonPayMenu/ButtonPayMenu'
import { StyleSheet, View } from 'react-native'
import Pay from '../Screens/Pay/Pay'
import Notification from '../Screens/Notification/Notification'
import Store from '../Screens/Store/Store'

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName = 'HomeStack'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#333',
        tabBarStyle:{
          height:60,
          justifyContent:'center',
          alignItems:'center',
          paddingBottom:5  
        }
      }}
    >
      
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel:'Início',
          tabBarIcon: ({focused, color, size})=>(
            <Icons name={focused? "home": "home-outline"} color='black' size={22}/>
          )
        }}
        
      ></Tab.Screen>

      <Tab.Screen
        name="Carteira"
        component={Wallet}
        options={{
          tabBarLabel:'Wallet',
          tabBarIcon: ({focused, color, size})=>(
            
            <Icons name={focused? 'wallet': 'wallet-outline'} color='black' size={22}/>
          )
        }}
        
      ></Tab.Screen>

      <Tab.Screen
        name="Pagar"
        component={Pay}
        options={{
          tabBarLabel:'Pagar',
          tabBarIcon: ({focused, color, size})=>(
            
            <ButtonPayMenu/>
          )
        }}
        
      ></Tab.Screen>

      <Tab.Screen
        name="Notificacoes"
        component={Notification}
        options={{
          tabBarLabel:'Notificações',
          tabBarIcon: ({focused, color, size})=>(
            
            <Icons name={focused? "bell": "bell-outline"} color='black' size={22}/>
          )
        }}
        
      ></Tab.Screen>

      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarLabel:'Store',
          tabBarIcon: ({focused, color, size})=>(
            
            <Icons name={focused? "shopping": "shopping-outline"} color='black' size={22}/>
          )
        }}
        
      ></Tab.Screen>

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'green'
  }
})