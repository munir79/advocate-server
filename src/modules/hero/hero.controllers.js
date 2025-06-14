import { HeroService } from "./hero.service.js";


const HeroDataCreateControllers=async(req,res,next)=>{
try{
        const payLoad=req.body;
    const result=await HeroService.CreateHeroDataIntoDb(payLoad);
    res.status(200).json({
        success:true,
        message:" Hero Data Created Successfully",
        data:result
    })
}
catch(err){
    next(err);
}
}

//  get hero Data  Controllers from db 

const GetHeroDataControllers=async(req,res,next)=>{
try{
        const result =await HeroService.GetHeroDataFromDb();
        res.status(200).json({
            success:true,
            messgae:"Get Hero data  successfully",
            data:result
        })
    

}
catch(err){
    next(err)
}    
}

export const HeroControllers={HeroDataCreateControllers,GetHeroDataControllers};