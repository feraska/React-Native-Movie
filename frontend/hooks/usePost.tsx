import axios, { AxiosError } from "axios";
import { useState } from "react";
const usePost = (url:string) => {
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(false)
    const [message,setMessage] = useState("")
    const post = async(body)=> {
        try {
            setLoading(true)
             axios.post(url,body).then((message)=> {
                setMessage(message.data)
                setError(false)
                setLoading(false)
             })
           
        } catch(err) {
            setError(true)
            setLoading(false)
            throw new Error((err as AxiosError).response?.data.message)
            
        }
        
    }
    return {
        post,error,message,loading
    }
}
export default usePost