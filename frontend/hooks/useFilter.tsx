import {  useEffect, useState } from "react"
import { card } from "./useApi"
import axios, { AxiosError } from "axios"


const useFilter = (url:string) => {
    const [data,setData] = useState<card[]>()
    const [error,setError] = useState("")
    const [loading,setloading] = useState(false)
    useEffect(()=> {
        const getData = async() => {
            try {
                setloading(true)
              const res =  await axios.get(url,{
                    headers:{
                        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2ExYmEyODQzOTRiZTdlNmRjOGJjZGQyNjc0MDI3ZCIsInN1YiI6IjY1OWQ3ZGUyNjcyOGE4MDFhNTJmMGY1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nbpGYJefKmzpVTswVPSaTSzFUWPf3m80zj1sgDAtdn8"
                    }
                })
                setloading(false)
                setData(res.data)
            } catch (err) {
                setloading(false)
                setError((err as Error).message)
                throw new Error((err as AxiosError).response?.data.message)
            }
        }
        getData()
       
},[url])
return {
    data,loading,error
}
}


export default useFilter