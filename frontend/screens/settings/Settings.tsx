import React ,{ useContext, useEffect } from "react"
import { actions, AuthContext } from "../../context/AuthContext"
import { Pressable, StyleSheet, Text, View } from "react-native"
import useGlobal from "../../hooks/useGloabal"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import useDelete from "../../hooks/useDelete"
import { api } from "../../enums/api"
import Loading from "../../components/loading/Loading"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { logout } from "../../redux/slices/user"

const Settings = ()=> {
    const {state,dispatch} = useContext(AuthContext)
    const navigation = useNavigation()
    const {deletE} = useDelete(api.logoutMainServer)
    const login = useAppSelector((state)=>state.user.login)
    const user = useAppSelector((state)=>state.user.user)
    const dispach = useAppDispatch()
    useGlobal()
    
    const logOut = async()=> {
       
            await deletE()
            // dispatch({type:actions.logout,payload:undefined})
            dispach(logout())
            navigation.navigate("login")
            
        
    }
    // if(login === 0) {
    //     return navigation.navigate("login")
    // }
    
    // if(login === 2 ) {
    //     return<Loading/>
    // }
    return(
        <View style={styles.container}>
            <Text>{user?.firstName}</Text>
            <Text>{user?.lastName}</Text>
            <Text>{user?.email}</Text>
            <Pressable onPress={logOut}>
                <SimpleLineIcons
                name="logout"
                color="black"
                size={22}
                />
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
        gap:10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:30,
    }
})
export default Settings