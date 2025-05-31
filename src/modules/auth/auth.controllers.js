import { AuthService } from "./auth.service.js";


const CreateUSerControllers=async(req, res, next)=>{
    try{
        const userData=req.body;
        const cretaeUser=await AuthService.registarUser(userData);
        res.status(200).json({
            sucess:true,
            message:" User Created SucesFully",
            data:cretaeUser
        })

    }
    catch(err){
        next(err)
    }
}

export const AuthControllers={CreateUSerControllers}