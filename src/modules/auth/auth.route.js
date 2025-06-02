

import express from 'express';
import { AuthControllers } from './auth.controllers.js';

const router=express.Router();
router.post('/signup',AuthControllers.CreateUSerControllers);
router.post('/signin',AuthControllers.signIn);
router.post('/forget-password',AuthControllers.forgetPasswordControllers);
router.post('/reset-password',AuthControllers.resetPasswordControllers);

export const UserRoute=router;