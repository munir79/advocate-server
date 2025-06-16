import express from 'express';
import { ProfileControllers } from './profile.controllers.js';

const router=express.Router();

router.post('/profile-create',ProfileControllers.profilecreateControllers);
router.patch('/update-profile/:id',ProfileControllers.profileUpdateControllers);
router.get('/get-profile-data/:id',ProfileControllers.getSingleProfileDataControllers);


export const ProfileRouter=router;