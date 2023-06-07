import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../Screens/Home/Home'
import Header from '../components/HomeScreen/Header/Header';

export default function HomeStack() {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeStack'
        component={Home}
        options={{
          headerTitle: ()=> <Header/>,
          headerShadowVisible: false
        }}
      />
    </Stack.Navigator>
    
  )
}

