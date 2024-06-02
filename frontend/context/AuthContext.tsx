import React, { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

import { Socket } from "socket.io-client";
import { AppState, action } from "../interfaces/auth";


  
 const INITIAL_STATE:AppState = {
    genre:[],
    list:[],
    likes:[],
    user:undefined ,
    login:2,
    loading:false,
    notification:[]
}
interface Props {
    children: React.ReactNode;
  }
export const AuthContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<action>;
  }>({
    state:INITIAL_STATE,
    dispatch: () => null
  });
  
export const AuthContextProvider:React.FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE)
    return(

        <AuthContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}