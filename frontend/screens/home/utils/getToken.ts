import AsyncStorage from "@react-native-async-storage/async-storage"

export const getToken = async() => {
   // try {
    return await AsyncStorage.getItem("access_token")
    

 //   } catch(err) {
     //   throw new Error("not authonticated")
       // return null
  //  }
}