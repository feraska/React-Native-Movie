import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import useGlobal from "../../hooks/useGloabal"
import Loading from "../../components/loading/Loading"
import { StyleSheet, Text, View } from "react-native"
import ListItem from "../../components/listItem/ListItem"

const List = ()=> {
    const {state} = useContext(AuthContext)
   useGlobal()
   if(state.login === 2) {
    return<Loading/>
}

    return(
       <View style={styles.list}>
            <Text>My List</Text>
            <View style={styles.ul}>
            {state.list?.map((id,i)=>(
               <ListItem id={id} key={i}/>
            ))}
            </View>
        
        </View>
    )
}
const styles = StyleSheet.create({
    list: {
        flex:1,
        marginTop: 50,
        marginLeft:10,
        display: "flex",
        flexDirection: "column",
        gap: 20,
    },
    ul: {
        display: "flex",
        flexDirection:"row",
        flexWrap:"wrap",
        gap:  20,
    }
})
export default List