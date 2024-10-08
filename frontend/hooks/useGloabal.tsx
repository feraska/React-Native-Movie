"use client"
import { useEffect, useState } from "react"
import useGet from "./useGet"
import { api } from "../enums/api"
import useGetArray from "./useGetArray"
import usePost from "./usePost"
import { io } from "socket.io-client"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { addNotification, getNotification } from "../redux/slices/notification"
import { getUser, login } from "../redux/slices/user"

const useGlobal = () => {
    const notification = useAppSelector((state)=>state.notification.notification)
    const User = useAppSelector((state)=>state.user.user)
    const socketIo = useAppSelector((state)=>state.user.socket)
    const dispatch = useAppDispatch()
    const {data:user,get} = useGet(api.findUser)
    const {data:messages,getData:getMessages} = useGetArray(api.getNotification)
    const {post} = usePost(api.addNotification)
    const [msg,setMsg] = useState(undefined)
    const [first,setFirst] = useState(0)
   
    const [firstnot,setFirstNot] = useState(0)
    // useEffect(()=> {
        
      
    //     if(!User?._id) {
            
    //         return
    //     }
    //     if(socketIo?.id) {
            
    //         return
    //     }
    //     try {
    //     const socket = io("https://0tb1mjxb-9000.euw.devtunnels.ms/")
    //     socket?.on("connect",()=> {
    //         console.log("connected")
    //     })
    //     socket?.on("sendMsg",(msg)=> {
    //         setMsg(msg)
           
  
    //       })

    //       socket.on("disconnect",()=> {
    //         console.log("disconnect")
    //     })
    // } catch(err) {

    // }
   
    // },[User?._id])

    // useEffect(()=> {
    //     return()=>{
    //     if(!User?.email) {
    //         return
    //     }
    //     if(msg) {
    //     dispatch(addNotification({msg,to:User?._id}))
    //     post({msg,to:User?._id})
    //     }
    //     }

    // },[User?.email,msg])
    useEffect(()=> {
        const getAll = async()=> {
            try {
             await get()
            } catch (err) {
            dispatch(login(0))
            }
             
         }
         if(first === 0) {
             setFirst(1)
             return
         }
         
         if(!User?._id) {
             getAll()
         }
    },[User?.email,first])
    useEffect(()=> {
        
      
    if(user?._id) {
        dispatch(login(1))
        dispatch(getUser(user))
        
      }
    },[user?._id])

// useEffect(()=> {
//     const getAll = async()=> {
//         await getMessages()
       
//         }
//         if(firstnot === 0) {
//             setFirstNot(1)
//             return
//         }
    
//             if(notification.length == 0 && User?.email) {
//                 getAll()
//             }
//             if(messages) {
//                 dispatch(getNotification(messages))
                
//                 }

  
    
// },[messages,User?.email,firstnot])
}


export default useGlobal