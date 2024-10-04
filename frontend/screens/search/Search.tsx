import { useEffect, useState } from "react"
import { ScrollView, StyleSheet, TextInput, View } from "react-native"
import useFilter from "../../hooks/useFilter"
import CardItem from "../../components/cardItem/CardItem"

const Search = () => {
    const [movie,setMovie] = useState("")
    const [url,setUrl] = useState(``)
   
    const {data,loading} = useFilter(url)
    
    useEffect(()=> {
       
        if(movie) {
            setUrl(`https://api.themoviedb.org/3/search/movie?query=${movie}`)
        } else {
            setUrl(`https://api.themoviedb.org/3/search/movie?query="feras"`)
        }
    },[movie])
    const handleChange = (value:string) => {
        setMovie(value)
        
    }
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.column} >
            <TextInput style={styles.inputView} onChangeText={(value)=>handleChange(value)} placeholder='search a movie'  autoCorrect={false} placeholderTextColor="black"/> 
                <View style={styles.data}>
                {data?.results?.map((item,i)=>(
                    <CardItem item={item} key={i}/>
                ))}
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    scrollContainer: {
        flex:1,
        backgroundColor:"black"
        
        
    },
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
        gap:10
      },
      data: {
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"
      }
})
export default Search