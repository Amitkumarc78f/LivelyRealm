import { errorHandler } from "./error.js";
import jwt  from "jsonwebtoken";
export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;

    if(!token){
        return next(errorHandler(401,"Unauthorised"))

    }
  // console.log(1222);
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return next(errorHandler(403,"Forbidden"))

        req.user=user;
       // console.log(req.user.id);
      //  console.log(23876976);

        next();
    })
}