import React from "react"

import { Image, StyleSheet, View } from "react-native"

const Playing:React.FC<{url:string}> = ({url}) => {
    
    
    return(
        <View>
            
            <Image style={styles.movieImg}
            source={{
               uri:`https://image.tmdb.org/t/p/w500/${url}`
            }}
            />
            
            
            
       
         
        </View>
    )
}
const styles = StyleSheet.create({
   
    movieImg: {
        width:'100%',
        height: '100%',
        borderRadius: 10,
        objectFit: "cover"
      },
})
export default Playing