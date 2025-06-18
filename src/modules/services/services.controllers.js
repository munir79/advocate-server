import { CardService } from './cardser.service.js';

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

// get all service controllers

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

export const SericeControllers = { CreateServiceControllers, getAllServiceControllersFromDb };
