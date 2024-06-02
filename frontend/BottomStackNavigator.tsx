import React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login//Login';
import Register from './screens/register/Register';
import Home from './screens/home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type RootStackParamList = {
  home: undefined;
};
const Stack = createBottomTabNavigator<RootStackParamList>();

const MyBottom = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        
  
        <Stack.Screen
        name='home'
        component={Home}
        options={{headerShown:false}}


        
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default MyBottom