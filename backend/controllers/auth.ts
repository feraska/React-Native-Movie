import { NextFunction,Request,Response } from "express"
import User from "../models/user"
import { createError } from "../utils/error"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const register = async(req:Request,res:Response,next:NextFunction) => {
    try {
        const {email,firstName,lastName,password} = req.body
        const salt = await bcrypt.genSalt(16)
        const hashedPassword = await bcrypt.hash(password,salt)
        await User.create({
            email,
            firstName,
            password:hashedPassword,
            lastName
        })
        return res.status(200).json("register successfully")
    } catch (err) {
        return next(createError(500,(err as Error).message))
    }
   
    
}
export const login = async(req:Request,res:Response,next:NextFunction) => {
  
    try {
        console.log("login")
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user) {
        return next(createError(400,"user not found"))
        }
    const isCorrectPassword = await bcrypt.compare(password,user.password)
    if(!isCorrectPassword) {
        return next(createError(400,"the password not correct"))
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT!);
    return res.status(200).json({"access_token":token})

    } catch(err) {
        return next(createError(500,(err as Error).message))
    }
   
}
export const logout = (req:Request,res:Response,next:NextFunction) => {
    try {
    res.clearCookie('access_token')
    return res.status(200).json("logout")
    } catch (err) {
        return next(createError(500,(err as Error).message))
    }
  }