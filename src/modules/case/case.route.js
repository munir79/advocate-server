import express from 'express';
import { LeagalCaseControllers } from './case.controllers.js';
import authenticated from '../../middlewares/auth.js';

const router = express.Router();
router.post('/create-lageal-case', LeagalCaseControllers.CreateLegalCaseControllers);
router.get('/', LeagalCaseControllers.GetallLegalCaseControllers);

export const LegalCaseRoute = router;
