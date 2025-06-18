import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest.js';
import { ServicesValidationSchema } from './services.validation.js';
import { SericeControllers } from './services.controllers.js';
const router = express.Router();

router.post(
  '/create-service',
  validateRequest(ServicesValidationSchema),
  SericeControllers.CreateServiceControllers
);
router.get('/get-all-service', SericeControllers.getAllServiceControllersFromDb);
router.patch(
  '/update-service/:id',
  validateRequest(ServicesValidationSchema),
  SericeControllers.UpdateServiceCardControllers
);
router.delete('/delete/:id', SericeControllers.deletedCardServiceControllers);
router.get('/get-single/:id', SericeControllers.getSingleCardServiceControllers);

export const ServiceRoutes = router;
