import { AdvocateService } from './advocate.service.js';

const CreateAdvocateControllers = async (req, res, next) => {
  try {
    //  const {name ,email ,phone , specialization ,experience }=req.body;
    const data = req.body;
    const advocate = await AdvocateService.CreateAdvocateService(data);
    res.status(201).json({
      success: true,
      message: 'Advocate Cretaed Suceesfully',
      data: advocate,
    });
  } catch (err) {
    next(err);
  }
};

// get all advocate

const getAllAdvocates = async (req, res, next) => {
  try {
    const advocate = await AdvocateService.getAllAdvocateServices();
    res.status(201).json({
      success: true,
      message: 'Get all Advocated Data SucessFully',
      total: advocate.length,
      data: advocate,
    });
  } catch (err) {
    next(err);
  }
};

// get single Advocate data

const getSingleAdvocate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const advocate = await AdvocateService.getSingleAdvocateServices(id);
    if (!advocate) {
      return res.status(404).json({ message: 'Advocate not found ' });
    }
    res.status(200).json({
      sucessa: true,
      message: ' Advocated  fetch sucessfully ',
      data: advocate,
    });
  } catch (err) {
    next(err);
  }
};

// update advocate
const updateAdvocateControllers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateAdvocate = await AdvocateService.UpdateAdvocateService(id, data);
    if (!updateAdvocate) {
      return res.status(404).json({
        success: false,
        message: 'Advocate not found ',
      });
    }
    return res.status(200).json({
      success: true,
      message: 'advocate Update successfully',
      data: updateAdvocate,
    });
  } catch (err) {
    next(err);
  }
};

// deleteAdvocate

const deleteAdvocateControllers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteAdvocate = await AdvocateService.deleteAdvocateService(id);
    if (!deleteAdvocate) {
      return res.status(404).json({
        success: false,
        message: ' advocate not found ',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Advocate deleted SuccessFully',
      data: deleteAdvocate,
    });
  } catch (err) {
    next(err);
  }
};

export const AdvocateControllers = {
  CreateAdvocateControllers,
  getAllAdvocates,
  getSingleAdvocate,
  updateAdvocateControllers,
  deleteAdvocateControllers,
};
