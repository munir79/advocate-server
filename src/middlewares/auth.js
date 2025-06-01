import jwt from 'jsonwebtoken';

const JWT_SECRECTKEY=process.env.JWT_SECRET || "Jwt_secret";

const authenticated=(req,res,next)=>{
    try{
        const authHeader=req.headers.authorization;
        if(!authHeader || !authHeader.startsWith('Bearer')){
            throw new Error(401, " unAuthorized :No token provided ");
        }
 
        const token=authHeader.split('')[1];
        const decoded=jwt.verify(token,JWT_SECRECTKEY);
        req.user=decoded; // user info save in req object 
        next();


    }
    catch(err){
        next(err)
    }
}
export default authenticated;
