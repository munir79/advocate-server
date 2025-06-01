

import express from 'express';
import { AuthControllers } from './auth.controllers.js';

const router=express.Router();
router.post('/signup',AuthControllers.CreateUSerControllers);
router.post('/signin',AuthControllers.signIn)

export const UserRoute=router;