

import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import ListItem from "../../components/listItem/ListItem"
import { useAppSelector } from "../../redux/hooks"
import { Key, useEffect, useState } from "react"
import useFlatList from "../../hooks/useFlatList"
import useGlobal from "../../hooks/useGloabal"

const List = ()=> {
   
    const user = useAppSelector((state)=>state.user.user)
    const {numColumns} = useFlatList()
    useGlobal()
    return(
    // <ScrollView style={styles.scrollContainer}>
       <View style={styles.list}>
        
            <Text style={styles.text}>My List</Text>
            {/* <View style={styles.ul}>
            {user?.list?.map((id,i)=>(
               <ListItem id={id} key={i}/>
            ))}
            </View> */}
            
             <FlatList
        data={user?.list}
        renderItem={({item})=><ListItem id={item}/>}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        key={`grid-${numColumns}`} // Unique key prop to trigger re-render
        // onEndReached={loadMoreItems} // Trigger when the user scrolls to the end
        onEndReachedThreshold={0.5}  // Adjust the threshold for when to trigger (0.5 means halfway down)
        // ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null} // Show loader while loading
      />
      </View>
           
        
      
        // </ScrollView>
    )
}
const styles = StyleSheet.create({
    list: {
        paddingHorizontal:20,
        display: "flex",
        flexDirection: "column",
        backgroundColor:"black",
        flex:1,
        gap: 20,
        
    },
    text: {
        fontSize:32,
        fontWeight:"bold",
        color:"white"
    },
    scrollContainer: {
        flex:1,
        backgroundColor:"black"
        
        
    },
    container: {
    flex: 1,
    paddingTop: 50,
    },
    ul: {
        
        display: "flex",
        flexDirection:"row",
        flexWrap:"wrap",
        gap:15
        
       
    }
})
export default List