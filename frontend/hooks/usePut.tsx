import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosError } from "axios";
import { useState } from "react";
const usePut = (url:string) => {
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)
    const [message,setMessage] = useState("")
    const put = async(body={})=> {
        try {
            setLoading(true)
           
                const item = await AsyncStorage.getItem("access_token")
                
                // if(!JSON.parse(item!).access_token) {
                //     throw new Error("no access token")
                // }
                const message = await axios.put(url,body,{
                    headers:{
                        Authorization:item
                    }
                    
                })
            
            setMessage(message.data)
            setError(false)
            setLoading(false)
        } catch(err) {
         
            setMessage((err as AxiosError).response?.data.message)
            setError(true)
            setLoading(false)
            throw new Error((err as AxiosError).response?.data.message)
            
        }
        
    }
    return {
        put,error,message,loading
    }
}
export default usePut