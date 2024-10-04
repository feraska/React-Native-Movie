import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import useGlobal from "../../hooks/useGloabal"
import { useState } from "react"

import { Link, useNavigation } from "@react-navigation/native"



import React from "react"
import usePost from "../../hooks/usePost"
import { api } from "../../enums/api"

import Loading from "../../components/loading/Loading"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { login } from "../../redux/slices/user"

const Login = () => {
    useGlobal()
    const navigation = useNavigation()
 
    const signin = useAppSelector((state)=>state.user.login)
    const dispatch = useAppDispatch()
    const [user,setUser] = useState({
        "email":"",
        "password":""
    })
    const {post,message,loading} = usePost(api.loginMainServer)
    
    
   
 
     const handleChange = (value:string,name:string) => {
        setUser({...user,[name]:value})
        
    }
     const handleLogin = async() => {
         try {
          
             await post(user)
             //dispatch({type:actions.login})
             dispatch(login(1))
             navigation.navigate("home")
             
            
         } catch(err) {
          
            
         }
         
    }
   

    if(signin === 1) {
      navigation.navigate("home")
      return
    }
    
    if(signin === 2) {
      return <Loading/>
  }

 
    
  
    return (
        <SafeAreaView style={styles.container}>
            
        <View style={styles.inputView}>
        <TextInput style={styles.input} onChangeText={(value)=>handleChange(value,"email")} placeholder='EMAIL OR USERNAME'  autoCorrect={false} placeholderTextColor="#fff" 
    autoCapitalize='none' />
        <TextInput style={styles.input} onChangeText={(value)=>handleChange(value,"password")} placeholder='PASSWORD' secureTextEntry  autoCorrect={false} placeholderTextColor="#fff" 
    autoCapitalize='none'/>
     <View style={styles.buttonView}>
        <Pressable disabled={loading} style={styles.button} onPress={handleLogin}>
            <Text  style={styles.buttonText}>LOGIN</Text>
        </Pressable>
    </View>
    </View>
    

   
    <Link to={{ screen: 'register' }} style={styles.link}>
      Register
    </Link>
    {loading&&<Text style={styles.loading}>loading...</Text>}
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    
    container : {
      alignItems : "center",
      paddingTop: 70,
      backgroundColor:"black",
      flex:1
     
    },
    image : {
      height : 160,
      width : 170
    },
    title : {
      fontSize : 30,
      fontWeight : "bold",
      textTransform : "uppercase",
      textAlign: "center",
      paddingVertical : 40,
      color : "red"
    },
    link:{
        color:"red",
        marginTop:30
    },
    inputView : {
      gap : 15,
      width : "100%",
      paddingHorizontal : 40,
      marginBottom  :5
    },
    input : {
      height : 50,
      paddingHorizontal : 20,
      borderColor : "red",
      borderWidth : 1,
      borderRadius: 7,
      color:"white"
    },
   
    button : {
      backgroundColor : "red",
      height : 45,
      borderColor : "gray",
      borderWidth  : 1,
      borderRadius : 5,
      alignItems : "center",
      justifyContent : "center",
      
    },
    buttonText : {
      color : "white"  ,
      fontSize: 18,
      fontWeight : "bold"
    }, 
    buttonView :{
      width :"100%",
      
    },
    optionsText : {
      textAlign : "center",
      paddingVertical : 10,
      color : "gray",
      fontSize : 13,
      marginBottom : 6
    },
    mediaIcons : {
      flexDirection : "row",
      gap : 15,
      alignItems: "center",
      justifyContent : "center",
      marginBottom : 23
    },
    icons : {
      width : 40,
      height: 40,
    },
    footerText : {
      textAlign: "center",
      color : "gray",
    },
    signup : {
      color : "red",
      fontSize : 13
    },
    loading : {
      color:"white",
      fontSize:13
    }
  })
   
export default Login