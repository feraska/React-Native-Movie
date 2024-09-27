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

const Settings = ()=> {
    const {state,dispatch} = useContext(AuthContext)
    const navigation = useNavigation()
    const {deletE} = useDelete(api.logoutMainServer)
    useGlobal()
    
    const logOut = async()=> {
       
            await deletE()
            dispatch({type:actions.logout,payload:undefined})
            navigation.navigate("login")
        
    }
    
    if(state.login === 2 ) {
        return<Loading/>
    }
    return(
        <View style={styles.container}>
            <Text>{state.user?.firstName}</Text>
            <Text>{state.user?.lastName}</Text>
            <Text>{state.user?.email}</Text>
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