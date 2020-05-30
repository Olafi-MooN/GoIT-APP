import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

import Home from './src/pages/Home';
import Instagram from './src/pages/Instagram';
import Facebook from './src/pages/Facebook';
import Linkedin from './src/pages/Linkedin'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Siga Go IT " component={Home} />
        <Stack.Screen name="Instagram" component={Instagram}/>
        <Stack.Screen name="Facebook" component={Facebook}/>
        <Stack.Screen name="Linkedin" component={Linkedin}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}