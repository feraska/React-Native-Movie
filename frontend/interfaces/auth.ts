import { Socket } from "socket.io-client";
import User from "../backend/interfaces/user";
import { genere } from "../hooks/useApi"
export interface AppState   {
    genre:Array<genere>;
    likes:Array<number>;
    list:Array<number>;
    user?:User;
    login:number;
    loading:boolean;
    notification:Array<notification>,
    socket:Socket
}
export interface notification {
    msg?:string,
    sender?:string,
    _id:string,
    createdAt:string
}

export enum actions  {
   get_genre = "get_genre",
   get_list = "get_list",
   get_likes = "get_likes",
   add_list = "add_list",
   remove_list = "remove_list",
   login = "login",
   user = "user",
   logout = "logout",
   like = "like",
   dislike = "dislike",
   addNotification = "addNotification",
   getNotification = "getNotification",
   socket = "socket"
}
export interface action  {
    type:actions,
    payload:Array<number> | string | number | User
    
}