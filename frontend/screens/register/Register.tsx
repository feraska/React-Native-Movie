import { Link } from "@react-navigation/native"
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import usePost from "../../hooks/usePost"
import useGlobal from "../../hooks/useGloabal"
import { api } from "../../enums/api"
import { useState } from "react"

const Register = () => {
    const [color,setColor] = useState("red")
    const {post,message,loading} = usePost(api.registerMainServer)
    const [user,setUser] = useState({
        "email":"",
        "password":"",
        "lastName":"",
        "firstName":""
    })
    const onFocus = () => {
      setColor("green")
    }
    const onBlur = () => {
      setColor("red")
    }
    //useGlobal()
    const handleChange = (value:string,name:string) => {
        setUser({...user,[name]:value})
        
    }
    const handleRegister = async() => {
        try {
        
            await post(user)
            
           
        } catch(err) {
         
           
        }
        
   }
   const s = {
    borderColor:color
   }
    return(
        <SafeAreaView style={styles.container}>
            
        <View style={styles.inputView}>
        <TextInput onFocus={onFocus} onBlur={onBlur} style={[styles.input]} onChangeText={(value)=>handleChange(value,"email")} placeholder='EMAIL OR USERNAME'  autoCorrect={false} placeholderTextColor="#fff" 
    autoCapitalize='none' />
        <TextInput style={styles.input} onChangeText={(value)=>handleChange(value,"password")} placeholder='PASSWORD' secureTextEntry  autoCorrect={false} placeholderTextColor="#fff" 
    autoCapitalize='none'/>
      <TextInput style={styles.input} onChangeText={(value)=>handleChange(value,"firstName")} placeholder='firstName'  autoCorrect={false} placeholderTextColor="#fff" 
    autoCapitalize='none' />
        <TextInput  style={styles.input} onChangeText={(value)=>handleChange(value,"lastName")} placeholder='last name'  autoCorrect={false} placeholderTextColor="#fff" 
    autoCapitalize='none'/>
     <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>REGISTER</Text>
        </Pressable>
    </View>
    </View>
    

   
    <Link to={{ screen: 'login' }} style={styles.link}>
      Login
    </Link>
    {loading&&<Text style={styles.loading}>loading...</Text>}
    <Text >{message}</Text>
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
      justifyContent : "center"
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
      fontSize : 13,
      marginBottom:50
    },
    loading : {
      color:"white",
      fontSize:13
    }
  })


export default Register