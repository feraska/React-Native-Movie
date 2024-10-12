import { useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import useLoadMore from "../../hooks/useLoadMore"
import { Picker } from "@react-native-picker/picker"

import CardItem from "../../components/cardItem/CardItem"
import useFlatList from "../../hooks/useFlatList"
import Loader from "../../components/loader/Loader"

const Languages = () => {
    const [page,setPage] = useState(1)
    const [lang,setLang] = useState("en")
    const [sort,setSort] = useState("")
    const {numColumns} = useFlatList()
    const {data,loading} = useLoadMore(`https://api.themoviedb.org/3/discover/movie?with_original_language=${lang}&page=${page}&sort_by=${sort}`,page,setPage,undefined,sort,lang)
    
    const loadMoreItems = () => {
        setPage((prev)=>prev+1)
    }
    return (
        <View style={styles.languages}>
            <View style={styles.box}>
                
                <View style={styles.dropdown}>

                    <View style={styles.drop}>
                    <Text style={styles.text}>Languages</Text>
                    <Picker style={styles.select} dropdownIconColor={"white"} dropdownIconRippleColor={"red"}
                        selectedValue={lang}
                        onValueChange={(itemValue, itemIndex) =>
                        setLang(itemValue)
  }>
                <Picker.Item  label="English" value="en" />
                <Picker.Item  label="Hebrew" value="he" />
                <Picker.Item  label="Arabic" value="ar" />
                </Picker>
                </View>
                
                <View style={styles.drop}>
                    <Text style={styles.text}>Sortby</Text>
                    <Picker style={styles.select} dropdownIconColor={"white"} dropdownIconRippleColor={"red"} selectionColor={"white"} 
                    selectedValue={sort}
                    onValueChange={(itemValue,itemIndex)=>
                        setSort(itemValue)
                    }
                    >
                        <Picker.Item label="Populary" value={"popularity.desc"}/>
                        <Picker.Item label="Year Relased" value={"primary_release_date.desc"}/>
                        <Picker.Item label="A-Z" value={"original_title.asc"}/>
                        <Picker.Item label="Z-A" value={"original_title.desc"}/>
                    </Picker>
                </View>
            </View>
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
        </View>
    )
}
export default Languages
const styles = StyleSheet.create({
    languages: {
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:"black",
        flex:1,
       
    },
    item: {
        color:"white",
    },
    text: {
        color:"white",
    },
    box: {
        flex:1,
        display:"flex",
        flexDirection:"column",
        gap:20
    },
    dropdown: {
        display:"flex",
        
        gap:10,
        flexDirection:"column",
        
        
        
    },
    select: {

                    flex:1,
                    backgroundColor:"black",
                    borderColor:"white",
                    color: "white",
                   
                    
                    
    },
    drop: {
      
        display: "flex",
        flexDirection:"row",
        justifyContent:"center",
                
                alignItems: "center",
    },
    ul: {

    }
})