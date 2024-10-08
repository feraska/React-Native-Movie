import * as React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, TouchableOpacity } from "react-native"
import { card } from "../../interfaces/card"
const CardItem:React.FC<{item:card}> = ({item}) => {
  const navigate =useNavigation()
  const handleOnClick=(movieData:card)=>{
   
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
       
      width: 100,
      margin: 10,
      height: 100,
      borderRadius: 6,
      resizeMode: "cover",
          }
  });
export default CardItem