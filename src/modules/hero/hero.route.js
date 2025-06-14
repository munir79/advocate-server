
import express from 'express';
import { HeroControllers } from './hero.controllers.js';
const router=express.Router();
router.post('/create-hero-data',HeroControllers.HeroDataCreateControllers);
router.get('/getHeroData',HeroControllers.GetHeroDataControllers);


export const  HeroRoutes=router;