import {  useState } from "react"
import { FlatList, StyleSheet, TextInput, View } from "react-native"
//import useFilter from "../../hooks/useFilter"
import CardItem from "../../components/cardItem/CardItem"
import useFlatList from "../../hooks/useFlatList"
import useLoadMore from "../../hooks/useLoadMore"
import Loader from "../../components/loader/Loader"

const Search = () => {
    const [movie,setMovie] = useState("")
    const [page,setPage] = useState(1)
    const {data,loading} = useLoadMore(`https://api.themoviedb.org/3/search/movie?query=${movie}&page=${page}`,page,setPage,movie)
    const {numColumns} = useFlatList()
   
    const handleChange = (value:string) => {
        setMovie(value)
        
    }
    const loadMoreItems = () => {
        setPage((prev)=>prev+1)
    }
    return (
       
            <View style={styles.column} >
            <TextInput style={styles.inputView} onChangeText={(value)=>handleChange(value)} placeholder='search a movie'  autoCorrect={false} placeholderTextColor="black"/> 
                {/* <View style={styles.data}>
                {data?.results?.map((item,i)=>(
                    <CardItem item={item} key={i}/>
                ))}
                </View> */}
                       <FlatList
        data={data}
        renderItem={({item})=><CardItem item={item}/>}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        key={`grid-${numColumns}`} // Unique key prop to trigger re-render
        onEndReached={loadMoreItems} // Trigger when the user scrolls to the end
        onEndReachedThreshold={0.5}  // Adjust the threshold for when to trigger (0.5 means halfway down)
        ListFooterComponent={loading ? <Loader/> : null} // Show loader while loading
      />
            </View>
       
    )
}
const styles = StyleSheet.create({
    
    inputView : {
        gap : 15,
        width : "100%",
        borderColor:"white",
        backgroundColor:"white",
        height:30,
        paddingHorizontal : 40,
        marginBottom  :5
      },
      column: {
        display:"flex",
        flexDirection:"column",
        gap:10,
        flex:1,
        backgroundColor:"black"
      },
      data: {
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"
      }
})
export default Search