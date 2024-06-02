import React, { useEffect } from "react"
import useApi from "../../hooks/useApi"

import { Image, StyleSheet, View } from "react-native"

const Playing:React.FC<{url:string}> = ({url}) => {
    const {data,getData} = useApi(url)
    useEffect(()=> {
        const get = async()=> {
            await getData()
            
        }
        get()
    },[])
    return(
        <View>
            {data?.results.length&&
            <Image style={styles.movieImg}
            source={{
               uri:`https://image.tmdb.org/t/p/w500/${data?.results[0].poster_path}`
            }}
            />
            }
            
            
       
         
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