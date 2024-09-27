import React, { useEffect } from "react"
import useApi from "../../hooks/useApi"
import { FlatList, StyleSheet, View } from "react-native"
import CardItem from "../cardItem/CardItem"
const Cards:React.FC<{url:string,genre?:boolean}> = ({url,genre}) => {
    const {data,getData} = useApi(url)
    useEffect(()=> {
        const get = async()=> {
            getData()
        }
        get()

    },[])
   
    return(
        < View style={styles.view}>
        
        <FlatList
          horizontal
          ItemSeparatorComponent={() => <View style={{width: 15}}></View>}
          data={data?.results}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CardItem item={item} key={item.id} />}
          keyExtractor={(item)=>item.id.toString()}
          
        />
      </View>
            
    )
}
const styles = StyleSheet.create({
    view:{
      flex:1,
      flexDirection:"row",
      gap:15
    },
   
  });
export default Cards