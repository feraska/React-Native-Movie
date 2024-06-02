import React ,{ useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Pressable, StyleSheet, Text, View } from "react-native"
import useGlobal from "../../hooks/useGloabal"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Settings = ()=> {
    const {state} = useContext(AuthContext)
    const navigation = useNavigation()
    
    useGlobal()
    const logOut = async()=> {
        await AsyncStorage.removeItem("access_token")
        navigation.navigate("login")
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