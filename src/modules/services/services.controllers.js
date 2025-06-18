import { CardService } from './cardser.service.js';

//  *******************************create ************************************************

const CreateServiceControllers = async (req, res, next) => {
  try {
    const payLoad = req.body;
    const result = await CardService.createServiceIntoDb(payLoad);
    res.status(200).json({
      success: true,
      message: ' SuccessFully create  Service data ',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// ***************************************** end created controllers **********************************
// **************************************** get all service controllers *******************************

const getAllServiceControllersFromDb = async (req, res, next) => {
  try {
    const service = await CardService.getAllServicefromDb();
    res.status(200).json({
      success: true,
      message: ' successfully get All data from db ',
      data: service,
    });
  } catch (err) {
    next(err);
  }
};

// **************************************** end  get all service controllers *******************************

// ******************************************** updated card services ***********************************
const UpdateServiceCardControllers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const payLoad = req.body;
    const update = await CardService.UpdateCardService(id, payLoad);
    // Optional: Check if deletion actually happened (e.g., if item was not found)
    if (!update) {
      return res.status(404).json({
        success: false,
        message: 'Service not found ',
      });
    }
    res.status(200).json({
      success: true,
      message: 'SuccessFully updated Services',
      data: update,
    });
  } catch (err) {
    next(err);
  }
};

// **************************************** end  update ************************************************************

//  ***************************************** delete cared controllers *******************************************

const deletedCardServiceControllers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await CardService.deletdCardSevice(id);
    // Optional: Check if deletion actually happened (e.g., if item was not found)
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Service not found or already deleted',
      });
    }
    res.status(200).json({
      success: true,
      message: ' successfully data deleted',
    });
  } catch (err) {
    next(err);
  }
};


// get single 


const getSingleCardServiceControllers=async(req,res,next)=>{
    try{
     const {id}=req.params;
     const result=await CardService.getSingelCardService(id);
     res.staus(200).json({
        success:true,

        message:'get single data successfully ',
        data:result
     })
    }
    catch(err){
        next(err)
    }
}

export const SericeControllers = {
  CreateServiceControllers,
  getAllServiceControllersFromDb,
  UpdateServiceCardControllers,
  deletedCardServiceControllers,
  getSingleCardServiceControllers
};
