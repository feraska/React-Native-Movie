import express, { NextFunction, Request, Response } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import authRouter from "./routes/auth"
import userRouter from "./routes/user"
import notificationRouter from "./routes/notification"
import { api } from "./enums/api"
dotenv.config()
const app = express()
const connectToDataBase = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL!)
        console.log("connection successfully")

    } catch(err) {
        console.log((err as Error).message)
    }
}
connectToDataBase()

app.use(cors())
app.use(express.json())

app.use(api.auth,authRouter)
app.use(api.user,userRouter)
app.use(api.notification,notificationRouter)
//error handler
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  });
app.listen(process.env.PORT,()=> {
    console.log(`the server run in port ${process.env.PORT}`)
})
