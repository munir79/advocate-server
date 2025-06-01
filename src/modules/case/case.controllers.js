import { LegalCaseService } from "./case.service.js";


const CreateLegalCaseControllers=async(req,res,next)=>{
    try{
      const payload=req.body;
      const result=await LegalCaseService.createCaseIntoDb(payload);
      res.status(200).json({
        success:true,
        message:" Your Legal case data created sucessfully",
        data:result
      })

    }
    catch(err){
        next(err)
    }
}

const GetallLegalCaseControllers=async(req,res,next)=>{
   try{
 const result=await LegalCaseService.getAllCaseFromDb();
    res.status(200).json({
        success:true,
        message:" get all case successfully ",
        data:result
    })
   }catch(err){
    next(err)
   }
}

export const LeagalCaseControllers={CreateLegalCaseControllers,GetallLegalCaseControllers}