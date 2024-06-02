import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import User from "../interfaces/user"
import AsyncStorage from "@react-native-async-storage/async-storage"
interface o  {
    get:()=>Promise<void>,
    data:User | undefined,
    error:boolean,
    loading:boolean
}
const useGet =  (url:string):o => {
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState<User>()
    const [user,setUser] = useState("")
    useEffect(()=> {
        const data = async()=> {
            try {
            const item = await AsyncStorage.getItem("access_token")
            setUser(item!)
        }
     catch(err) {

    }
    data()
}
    },[])
    const get = async()=> {

            try {
                setLoading(true)
                const item = await AsyncStorage.getItem("access_token")
                
                // if(!JSON.parse(item!).access_token) {
                //     throw new Error("no access token")
                // }
                const message = await axios.get(url,{
                    headers:{
                        Authorization:item
                    }
                })
                setData(message.data)
                setError(false)
                setLoading(false)
        
            } catch(err) {
                
                setData(undefined)
                setError(true)
                setLoading(false)
                throw new Error((err as AxiosError).response?.data.message)
                
            }
       
        
    }
    
    return {
        get,error,data,loading
    }
}
export default useGet