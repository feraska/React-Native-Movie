import React  from "react"
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native"
import useGlobal from "../../hooks/useGloabal"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { useNavigation } from "@react-navigation/native"

import useDelete from "../../hooks/useDelete"
import { api } from "../../enums/api"

import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { logout } from "../../redux/slices/user"
import Loader from "../../components/loader/Loader"

const Settings = ()=> {
    const navigation = useNavigation()
    const {deletE,loading} = useDelete(api.logoutMainServer)
    const login = useAppSelector((state)=>state.user.login)
    const user = useAppSelector((state)=>state.user.user)
    const dispach = useAppDispatch()
    useGlobal()
    
    const logOut = async()=> {
            try {
            await deletE()
            // dispatch({type:actions.logout,payload:undefined})
            dispach(logout())
           // navigation.navigate("login")
            } catch (e) {

            }
            
        
    }
    // if(login === 0) {
    //     return navigation.navigate("login")
    // }
    
    // if(login === 2 ) {
    //     return<Loading/>
    // }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{user?.firstName}</Text>
            <Text style={styles.text}>{user?.lastName}</Text>
            <Text style={styles.text}>{user?.email}</Text>
            {!loading?
                <Pressable onPress={logOut}>
                <SimpleLineIcons
                name="logout"
                color="white"
                size={50}
                />
            </Pressable>
            :<Loader/>
}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
        gap:20,
       
        alignItems:"center",
        
        backgroundColor:"black",
        flex:1
    },
    text: {
        fontSize:24,
        fontWeight:"bold",
        color:"white"
    }
})
export default Settings