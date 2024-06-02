import React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login//Login';
import Register from './screens/register/Register';
import Home from './screens/home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Loading from './components/loading/Loading';
import VideoPlayer from './components/Video/Video';
import List from './screens/list/List';
import Settings from './screens/settings/Settings';
type RootStackParamList = {
  home: undefined;
  login:undefined;
  register:undefined;
  homes:undefined;
  loading:undefined
  VideoPlayer:undefined,
  list:undefined,
  settings:undefined
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
   <Stack.Screen
     name="loading"
     component={Loading}
     options={{headerBackVisible:false,headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"}}}
   />
  <Stack.Screen
   name="register"
   component={Register}
   options={{headerBackVisible:false,headerStyle:{backgroundColor:"#000"},headerTitleStyle:{color:"#fff"}}}
   />
   <Stack.Screen
   name="home"
   component={BottomContainer}
   options={{headerBackVisible:false,headerShown:false,orientation:"all"}}

   />
    <Stack.Screen
     name='VideoPlayer'
    component={VideoPlayer}
    options={{headerBackVisible:false,headerShown:false,orientation:"all"}}
    />
 </Stack.Navigator>
  )
}
const BottomContainer = () => {
  return (
    <Bottom.Navigator
    >
    <Bottom.Screen
      name="homes"
      component={Home}
      options={{headerTitle:"home",title:"home",
      tabBarIcon:({color,size,focused}) => {
        return(
          <Image style={ {width: size, height: size }} 
          source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEX///8AAAAJCQkuLi7FxcV4eHh8fHz8/Pz19fXm5ubQ0NDMzMzt7e3d3d2wsLCnp6dnZ2eXl5dXV1cmJibW1tZDQ0OHh4dQUFC7u7ttbW1LS0thYWGRkZE0NDSfn585OTkWFhYcHBzCoFe+AAAEiElEQVR4nO2a63aqMBCFReUmeKmCotaq7/+SR1sziTCbJAq0a53Zv87RCF+TyZ6ZwGgkEolEIpFI9J8pz6Ld6bSLpjkesgwb+pz3yLQ8BQ+dlmBIMgkYjWd9IaWleZ8yZQd9cUxBcOiJKavNwYT96yMeKuiHadm8EbeEg0J9cHf6+FWofMXfatXYhcNB5Wtwq2BdpxoMaoaQ7qqF+1BQVRtTMK5+ASretjLd9BkPDgVC3NR+YKj52c705O4DQBUbF6abu1PG7R+KcXGkxVBQILnyWg4ClRzZq28KsKaruH+oOe/iu1v0zHfsV8e0b6iCv/bPdMS8T4zn/UIt+EtTWcAWDcGl6hEq/uRnYqGHLMbskGXYF1TMh/jlKffOLuyga09Q6YG97CF1GtYPVMbv+H3y+D5W+TfZDwYFQpxKgXi/p3/yodc5FLjPhUL8bl9rynQLPrC6hQIrspmqAT9uvinU/6eOGfsNqHnJXnBHIU5rSzOX8u7eHdQMJDVqDowM/aU+Q41OR1AoxNX3yVM2XKvdOHIK9xeZwLX1QtXWtmwuatdQOe/i+sBg2vySwn/GHrW8DZXzIb6h2VgyuW5MhwmpdRO+wFTxfhOpuElAng1pAKoOXocC7WZECQXusBUlHwuVLxK6HrW+xRXf7Eo+2t5IezKBpdEu3u7ajuP8mECMlsoxY2tP86VWGewWfyiwm7WLo1LSUKjGtri7DxMIhC3No1Mlp+s/eBriwQSuQS7u2rbrsgG5uzMS2OmbTA3waNvJR22Fq0UgLs9qLWK+jwL6UOGe8gc1JX5IYQjsYG3SfDaEOlrsfzJFJFqgcduqPxi07S2iKhkc/l0qxNL+Ox3irYevSFRS2EozVjlfi+sZ9ghxUxTuU97+wpbAAu5T0vx79E7Pok7MWu7XBTpuyviJdzhpUZUM/OYKHrKBBacQL5wOX5HOyketYWvIOhYUfM7Sm8zWbGsmkDPJxb0OOnlR+5Xx3+9rVLb48zq0gKKcAlrV8umZMmg3yYxBT+Oto9r6IC2YT1WB+1Daml27YTI2GUqg5Gi27ys+87wk/XALzcTPTPLuQ6XQ647JizYZKMrujgaebp6oPOskxE3Rw63ixH5/o+LveaRt+ZZj8jrTJuPDfT9i42VrmeI3tWl39/GIMyhy8Q4ckxf5KOfuJde3kFl0HOKmqIRiCrSqeWdy8dzxhPA17ZSPNtz9zhs/f0im63dI7y9qCmvpYvcdz4l5d5pW5jCsa1E9ay7W4ZHaUv0RuXhvIW6Kwt1wdypBs4cvTFShYj3r6kh0+qbedxpTqaQ2pja1N+peP61rJv1Uft5zcqg76KGYjLOE74qt9o7TvCqMuu8XoEbxrGp/b/A3oKwSKIESKIESKIH6C1DHqPk+fhhG7uchPUCZNZmpzPn0oQ8ocDA/FSiBEiiBEiiBEiiBEiiBEiiBEiiBEqj/Cuo6FNTFA8r1XYS3oVYeUOBdou6hwFESK9ur7V1BRY33uFrl8BL1XQjK7dch/2usbHWaWHVCJ3kuv135rJ1IJBKJRCLRX9U/50JNEoURwooAAAAASUVORK5CYII="}}/>
        )
      }
      }}
    
     
      />

<Bottom.Screen
      name="list"
      component={List}
      options={{headerTitle:"list",title:"list",
      tabBarIcon:({color,size,focused}) => {
        return(
          <Image style={ {width: size, height: size }} 
          source={{uri:"https://www.computerhope.com/jargon/l/list.jpg"}}/>
        )
      }
      }}
    
     
      />
      <Bottom.Screen
      name="settings"
      component={Settings}
      options={{headerTitle:"settings",title:"settings",
      tabBarIcon:({color,size,focused}) => {
        return(
          <Image style={ {width: size, height: size }} 
          source={{uri:"data:image/png;base64,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"}}/>
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