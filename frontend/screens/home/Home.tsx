import React from "react"
import {ScrollView, StatusBar, StyleSheet, View } from "react-native"
// import { NativeStackScreenProps } from "@react-navigation/native-stack"
import useGlobal from "../../hooks/useGloabal"

import Cards from "../../components/cards/Cards"
// type RootStackParamList = {
//     home: undefined;
//     login:undefined
//   };
  
  // type Props = NativeStackScreenProps<RootStackParamList>;
const Home = () => {
   
  //  useGlobal()

    return(
      
        <View style={styles.container}>
        <StatusBar
          barStyle={'default'}
          translucent
          backgroundColor={'transparent'}
        />
        <ScrollView style={styles.scrollView}>
        <View style={styles.subContainer}>
            {/* <Playing url="https://api.themoviedb.org/3/discover/movie"/> */}
            <Cards url="https://api.themoviedb.org/3/movie/now_playing"  />
            <Cards url="https://api.themoviedb.org/3/movie/popular" />
            <Cards url="https://api.themoviedb.org/3/movie/top_rated" />
            </View>
        </ScrollView>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      flex: 1,
    },
    scrollView: {
      flex: 1,
    },
    subContainer: {
      paddingHorizontal: 15,
      gap: 10,
      marginTop: 20,
    },
  });
export default Home