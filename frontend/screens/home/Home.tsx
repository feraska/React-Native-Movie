import React, { useContext, useEffect, useState } from "react"
import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import { AuthContext } from "../../context/AuthContext"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainerEventMap, NavigationContainerProps, NavigationProp, RouteProp, StackNavigationState } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import useGlobal from "../../hooks/useGloabal"
import Loading from "../../components/loading/Loading"
import MyBottom from "../../BottomStackNavigator"
import { getToken } from "./utils/getToken"
import Playing from "../../components/playing/Playing"
import Cards from "../../components/cards/Cards"
type RootStackParamList = {
    home: undefined;
    login:undefined
  };
  
  type Props = NativeStackScreenProps<RootStackParamList>;
const Home = ({navigation}) => {
   
    useGlobal()
    const {state,dispatch} = useContext(AuthContext)

//   
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