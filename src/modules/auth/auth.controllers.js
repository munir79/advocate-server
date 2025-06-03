import { AuthService } from './auth.service.js';

const CreateUSerControllers = async (req, res, next) => {
  try {
    const userData = req.body;
    const profileImage = `uploads/images/${req.file?.filename}`; // multer file name

    console.log('userData', userData);
    const cretaeUser = await AuthService.registarUser({ ...userData, profileImage });
    res.status(200).json({
      sucess: true,
      message: ' User Created SucesFully',
      data: cretaeUser,
    });
  } catch (err) {
    next(err);
  }
};

// sign in user

const signIn = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await AuthService.loginUser(user);
    res.status(200).json({
      sucess: true,
      message: 'log in successFully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const forgetPasswordControllers = async (req, res, next) => {
  try {
    const email = req.body.email;
    const result = await AuthService.forgetPassword(email);
    res.status(200).json({
      sucess: true,
      message: result.message,
    });
  } catch (err) {
    next(err);
  }
};

// reset password controllers
const resetPasswordControllers = async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;
    const result = await AuthService.resetPassword(token, newPassword);
    res.status(200).json({
      sucess: true,
      message: result.message,
    });
  } catch (err) {
    next(err);
  }
};

export const AuthControllers = {
  CreateUSerControllers,
  signIn,
  forgetPasswordControllers,
  resetPasswordControllers,
};
