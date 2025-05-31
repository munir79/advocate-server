

import express from 'express';
import { AuthControllers } from './auth.controllers.js';

const router=express.Router();
router.post('/signup',AuthControllers.CreateUSerControllers);

export const UserRoute=router;