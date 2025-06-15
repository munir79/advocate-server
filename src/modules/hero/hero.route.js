
import express from 'express';
import { HeroControllers } from './hero.controllers.js';
import { imageUploadMiddelware } from '../../middlewares/uploadMiddleware.js';
const router=express.Router();
router.post('/create-hero-data',imageUploadMiddelware.single('profileImage') ,HeroControllers.HeroDataCreateControllers);
router.get('/getHeroData', HeroControllers.GetHeroDataControllers);
router.patch('/update-hero-data/:id',imageUploadMiddelware.single('profileImage') ,HeroControllers.UpdateHeroDataControllers)


export const  HeroRoutes=router;