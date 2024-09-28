import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import useGlobal from "../../hooks/useGloabal"
import Loading from "../../components/loading/Loading"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import ListItem from "../../components/listItem/ListItem"
import { useAppSelector } from "../../redux/hooks"

const List = ()=> {
    const {state} = useContext(AuthContext)
    const user = useAppSelector((state)=>state.user.user)
    const login = useAppSelector((state)=>state.user.login)
   useGlobal()
//    if(login === 2) {
//     return<Loading/>
// }

    return(
    <ScrollView style={styles.scrollContainer}>
       <View style={styles.list}>
        
            <Text style={styles.text}>My List</Text>
            <View style={styles.ul}>
            {user?.list?.map((id,i)=>(
               <ListItem id={id} key={i}/>
            ))}
            </View>
           
        
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    list: {
        flex:1,
        marginTop: 50,
        marginLeft:10,
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        gap: 20,
    },
    text: {
        fontSize:32,
        fontWeight:"bold"
    },
    scrollContainer: {
        flex:1,
        
        
    },
    ul: {
        
        display: "flex",
        flexDirection:"row",
        flexWrap:"wrap",
        gap:  20,
    }
})
export default List