import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "./interfaces/stack";
import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from 'react';


import Home from './screens/home/Home';

import { Text } from 'react-native';

import List from './screens/list/List';
import Settings from './screens/settings/Settings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from "react-native-vector-icons/Feather"
import Languages from "./screens/languages/Languages";


const BottomContainer = () => {
    
    const Bottom = createBottomTabNavigator<RootStackParamList>();
    const navigate = useNavigation()
    const handlePress = () => {
      navigate.navigate("search")
    }
    return (
      <Bottom.Navigator screenOptions={{tabBarStyle:{
        backgroundColor:"black",
        borderColor:"white",
        minHeight:70,
        
        
        
      }}}
      >
      <Bottom.Screen
        name="homes"
        component={Home}
        options={{headerTitle:"home",title:"home",headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"},
        tabBarItemStyle:{
          display:"flex",
          flexDirection:"column",
          paddingVertical:10,
          justifyContent:"space-evenly",
          
          
          
          
        
        
        },
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
        tabBarItemStyle:{
          display:"flex",
          flexDirection:"column",
          paddingVertical:10,
          justifyContent:"space-evenly"
        
        
        },
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
        tabBarItemStyle:{
          display:"flex",
          flexDirection:"column",
          paddingVertical:10,
          justifyContent:"space-evenly"
        
        
        },
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


<Bottom.Screen
        name="languages"
        component={Languages}
        options={{headerTitle:"languages",title:"languages",headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"},
        tabBarItemStyle:{
          display:"flex",
          flexDirection:"column",
          paddingVertical:10,
          justifyContent:"space-evenly"
        
        
        },
        headerRight:(props) =><Feather name='search' color={"white"} size={25} style={{marginRight:10}} onPress={handlePress}/>,
             
        
        tabBarIcon:({color,size,focused}) => {
          return(
          <Feather name='droplet' size={25} color={"white"}/>
          )
        },
        tabBarLabel:({children,color,focused,position})=> {
          return (
            <Text style={{color:!focused?"white":"red"}}>{"Languages"}</Text>
          )
        }
        }}

        
      
       
        />
  
      </Bottom.Navigator>
    )
  }
  export default BottomContainer