import { AuthService } from './auth.service.js';

const CreateUSerControllers = async (req, res, next) => {
  try {
    const userData = req.body;
    const cretaeUser = await AuthService.registarUser(userData);
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

export const AuthControllers = { CreateUSerControllers ,signIn};
