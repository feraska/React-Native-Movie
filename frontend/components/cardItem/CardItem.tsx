import * as React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { responsiveWidth } from "react-native-responsive-dimensions"




const CardItem = ({item}) => {
  const navigate =useNavigation()
  const handleOnClick=(movieData)=>{
   
    navigate.navigate('VideoPlayer',{movieData})
  }
   
    return (
      // <ScrollView horizontal>
        <TouchableOpacity onPress={()=>handleOnClick(item)}>
            <Image source={
            {uri:`https://image.tmdb.org/t/p/w500/${item?.poster_path?item.poster_path:item?.backdrop_path}`}
            }
            resizeMode="center"
            style={styles.movieImg}
             />
          
        </TouchableOpacity>
       
    )
}
const styles = StyleSheet.create({
   
    movieImg: {
       
      width: 105,
      margin: 10,
      height: 152,
      borderRadius: 6,
      resizeMode: "cover",
          }
  });
export default CardItem