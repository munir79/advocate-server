import { HeroService } from './hero.service.js';

const HeroDataCreateControllers = async (req, res, next) => {
  try {
    const payLoad = req.body;
    const profileImage = `uploads/images/${req.file?.filename}`;

    // const profileImage=`uploads/images/${req.file?.filename}`
    // const profileImage=req.file?.filename;

    const result = await HeroService.CreateHeroDataIntoDb({ ...payLoad, profileImage });
    res.status(200).json({
      success: true,
      message: ' Hero Data Created Successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

//  get hero Data  Controllers from db

const GetHeroDataControllers = async (req, res, next) => {
  try {
    const result = await HeroService.GetHeroDataFromDb();
    res.status(200).json({
      success: true,
      messgae: 'Get Hero data  successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};


// updateHroDataControllers 

const UpdateHeroDataControllers=async(req, res, next)=>{
    try{
     const {id}=req.params;
     const UpdateData=req.body;
     
     if(req.file?.filename){
      UpdateData.profileImage = `uploads/images/${req.file.filename}`;

     }

     const result =await HeroService.UpdateHeroDataIntoDb(id,UpdateData);
     res.status(200).json({
        success:true,
        message:" Hero Data Updated Successfully ",
        data:result
     })
    }
    catch(err){
        next(err)
    }
}




export const HeroControllers = { HeroDataCreateControllers, GetHeroDataControllers ,UpdateHeroDataControllers};
