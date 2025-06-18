import { get } from "node:https";
import { ProfileService } from "./profile.service.js";


const profilecreateControllers=async(req,res,next)=>{
    try{
     const payLoad=req.body;
     const result=await  ProfileService.profileCreateIntoDb(payLoad);
     res.status(200).json({
        success:true,
        message:'profile data created Successfully',
        data:result
     })
    }
    catch(err){
        next(err)
    }
}

//  profile update dat 
const profileUpdateControllers=async(req,res,next)=>{
    try{
      const {id}=req.params;
      const payLoad=req.body;
      const result=await ProfileService.UpdatedProfileInDb(id,payLoad);
      res.status(200).json({
        success:true,
        message:" update Profile Data Successfully",
        data:result

      })
    }
    catch(err){
        next(err)
    }
}


// get  single profile data 


const getSingleProfileDataControllers=async(req,res,next)=>{
   try{
    const id=req.params.id;

   const result=await ProfileService.getSingleProfileFromDb(id);
   res.status(200).json({
    success:true,
    message:" get all profiler data successfully ",
    data:result
   })

   }
   catch(err){
   next(err)
   }
}

// get All profile 
const getProfileDataControllers=async(req,res,next)=>{
   try{
   

   const result=await ProfileService.getProfileFromDb();
   res.status(200).json({
    success:true,
    message:" get all profiler data successfully ",
    data:result
   })

   }
   catch(err){
   next(err)
   }
}

export const ProfileControllers={profilecreateControllers,profileUpdateControllers,getSingleProfileDataControllers,getProfileDataControllers}