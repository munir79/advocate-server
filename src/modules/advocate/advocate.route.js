import  expres from 'express'
import { AdvocateControllers } from './advocate.controllers.js';
const router =expres.Router();

//crate advocate 
router.post('/create-advocate',AdvocateControllers.CreateAdvocateControllers);
router.get('/',AdvocateControllers.getAllAdvocates)
router.get('/:id' ,AdvocateControllers.getSingleAdvocate)
router.put('/:id',AdvocateControllers.updateAdvocateControllers);

export const  AdvocateRoute=router;