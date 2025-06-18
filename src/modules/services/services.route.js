import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest.js';
import { ServicesValidationSchema } from './services.validation.js';
import { SericeControllers } from './services.controllers.js';
 const router=express.Router();

 router.post('/create-service',validateRequest(ServicesValidationSchema),SericeControllers.CreateServiceControllers);
 router.get('/get-all-service',SericeControllers.getAllServiceControllersFromDb);

 export const  ServiceRoutes=router;