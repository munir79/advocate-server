import  expres from 'express'
import { AdvocateControllers } from './advocate.controllers.js';
const router =expres.Router();

//crate advocate 
router.post('/create-advocate',AdvocateControllers.CreateAdvocateControllers);
router.get('/',AdvocateControllers.getAllAdvocates)
router.get('/:id' ,AdvocateControllers.getSingleAdvocate)

export const  AdvocateRoute=router;