import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./interfaces/stack";

import React, { useMemo } from 'react';


import Login from './screens/login//Login';
import Register from './screens/register/Register';


import VideoPlayer from './components/Video/Video';

import BottomContainer from "./BottomContainer";
import Search from "./screens/search/Search";
import { useAppSelector } from "./redux/hooks";
import useGlobal from "./hooks/useGloabal";
import Loading from "./components/loading/Loading";

const StackContainer = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    useGlobal()
    const login = useAppSelector((state)=>state.user.login)
    return (
      <Stack.Navigator >
        {login===1?
       <Stack.Screen
     name="home"
     component={BottomContainer}
     options={{headerBackVisible:false,headerShown:false,orientation:"all",headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"}}}
  
     />:login === 0?
      <Stack.Screen
       name="login"
       component={Login}
       options={{headerBackVisible:false,headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"}}}
     />:
     <Stack.Screen
       name="loading"
       component={Loading}
       options={{headerBackVisible:false,headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"}}}
     />
        }
    
     <Stack.Screen
     name="register"
     component={Register}
     options={{headerBackVisible:false,headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"}}}
     />
      <Stack.Screen
       name='VideoPlayer'
      component={VideoPlayer}
      options={{headerBackVisible:false,headerShown:false,orientation:"all",}}
      />
      <Stack.Screen
       name="search"
      component={Search}
      options={{headerBackVisible:true,orientation:"all",headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"},headerTintColor:"#fff"}}
      />
   </Stack.Navigator>
    )
  }
  export default StackContainer