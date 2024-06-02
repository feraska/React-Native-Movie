import { View,StyleSheet,Image } from "react-native";
import background from "../../assets/login.jpg"
import React from "react"

const BackgroundImage = () => {
    return (
        <View style={styles.container}>
        <Image style={styles.img} source={background} /> 
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      width:"100%",
      height:"100%"
    },
    img: {
        width:"100%",
        height:"100%"
    }
  });
export default BackgroundImage;

    
