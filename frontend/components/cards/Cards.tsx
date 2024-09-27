import React, { useEffect } from "react"
import useApi from "../../hooks/useApi"
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import CardItem from "../cardItem/CardItem"
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import { useNavigation } from "@react-navigation/native"
const Cards:React.FC<{url:string,genre?:boolean}> = ({url,genre}) => {
    const {data,getData} = useApi(url)
    useEffect(()=> {
        const get = async()=> {
            getData()
        }
        get()

    },[])
    // const navigation =useNavigation()

  //   const handleOnClick=(movieData)=>{
  //  navigation.navigate('VideoPlayer',{movieData})
  //   }
    // const renderMovieCards = ({item, index}) => {
    //   return (
    //     <TouchableOpacity onPress={()=>handleOnClick(item)} >
    //       <Image
    //         resizeMode="center"
    //         style={styles.movieImg}
    //         source={{
    //           uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
    //         }}
    //       />
    //     </TouchableOpacity>
    //   );
    // };
    return(
        < View style={styles.view}>
          {/* <ScrollView horizontal showsVerticalScrollIndicator={false} >
          {data?.results.map((item,i)=>(
            <CardItem key={i} item={item}/>
          ))}
          </ScrollView> */}
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
    // container: {
    //     height: responsiveHeight(40),
    //     gap: 15,
    //     marginTop: 10,
    //   },
    //   movieImg: {
    //     width: responsiveWidth(50),
    //     height: '100%',
    //     borderRadius: 10,
    //   },
    
   
  });
export default Cards