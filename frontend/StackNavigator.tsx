import React from 'react';
import {NavigationContainer, ParamListBase, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login//Login';
import Register from './screens/register/Register';
import Home from './screens/home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';
import Loading from './components/loading/Loading';
import VideoPlayer from './components/Video/Video';
import List from './screens/list/List';
import Settings from './screens/settings/Settings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from "react-native-vector-icons/Feather"
import Search from './screens/search/Search';
type RootStackParamList = {
  home: undefined;
  login:undefined;
  register:undefined;
  homes:undefined;
  loading:undefined
  VideoPlayer:undefined,
  list:undefined,
  settings:undefined,
  search:undefined
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const Bottom = createBottomTabNavigator<RootStackParamList>();
const StackContainer = () => {
  return (
    <Stack.Navigator >
        
    <Stack.Screen
     name="login"
     component={Login}
     options={{headerBackVisible:false,headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"}}}
   />
   {/* <Stack.Screen
     name="loading"
     component={Loading}
     options={{headerBackVisible:false,headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"}}}
   /> */}
  <Stack.Screen
   name="register"
   component={Register}
   options={{headerBackVisible:false,headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"}}}
   />
   <Stack.Screen
   name="home"
   component={BottomContainer}
   options={{headerBackVisible:false,headerShown:false,orientation:"all",headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"}}}

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
const BottomContainer = () => {
  const navigate = useNavigation()
  const handlePress = () => {
    navigate.navigate("search")
  }
  return (
    <Bottom.Navigator screenOptions={{tabBarStyle:{
      backgroundColor:"black",
      borderColor:"white"
    }}}
    >
    <Bottom.Screen
      name="homes"
      component={Home}
      options={{headerTitle:"home",title:"home",headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"},
      headerRight:(props) =><Feather name='search' color={"white"} size={25} style={{marginRight:10}} onPress={handlePress}/>,
      tabBarIcon:({color,size,focused}) => {
        return(
          <AntDesign name='home' size={25} color={"white"}/>
     
        )

      },
      tabBarLabel:({children,color,focused,position})=> {
        return (
          <Text style={{color:!focused?"white":"red"}}>{"Home"}</Text>
        )
      }
      }}
    
     
      />

<Bottom.Screen
      name="list"
      component={List}
      options={{headerTitle:"list",title:"list",headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"},
      headerRight:(props) =><Feather name='search' color={"white"} size={25} style={{marginRight:10}} onPress={handlePress}/>,
      tabBarIcon:({color,size,focused}) => {
        return(
         <Entypo name="list" size={25} color={"white"} />
        )
      },
      tabBarLabel:({children,color,focused,position})=> {
        return (
          <Text style={{color:!focused?"white":"red"}}>{"List"}</Text>
        )
      }
      }}
    
     
      />
      <Bottom.Screen
      name="settings"
      component={Settings}
      options={{headerTitle:"settings",title:"settings",headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"},
      headerRight:(props) =><Feather name='search' color={"white"} size={25} style={{marginRight:10}} onPress={handlePress}/>,
           
      
      tabBarIcon:({color,size,focused}) => {
        return(
        <Feather name='settings' size={25} color={"white"}/>
        )
      },
      tabBarLabel:({children,color,focused,position})=> {
        return (
          <Text style={{color:!focused?"white":"red"}}>{"Settings"}</Text>
        )
      }
      }}
    
     
      />

    </Bottom.Navigator>
  )
}
const MyStack = () => {
  return (
    <NavigationContainer>
     <StackContainer/>

    
    </NavigationContainer>
  )
}
export default MyStack