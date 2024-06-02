import jwt from "jsonwebtoken";
import { createError } from "./error";
import { NextFunction, Request, Response } from "express";
import RequestWithUser from "../interfaces/requestWithUser";
import User from "../interfaces/user";
export const verifyToken =(req: RequestWithUser, res: Response, next: NextFunction)  => {
  const token = req.headers['authorization'];
  if (!token) return next(createError(401, "You are not authenticated!"));
  const decoded = jwt.verify(JSON.parse(token).access_token, process.env.JWT!)
    if(!decoded) {
        return next(createError(403, "Token is not valid!"));
    }
    req.user = (decoded as User);
    next()
  
};