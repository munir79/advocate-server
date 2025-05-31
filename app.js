import express from 'express';
import cors from 'cors';
import { AdvocateRoute } from './src/modules/advocate/advocate.route.js';
import notFound from './src/middlewares/notFound.js';
import globalErrorHandelar from './src/middlewares/globalErrorHandelar.js';
import { UserRoute } from './src/modules/auth/auth.route.js';


const app=express();

//middlewares
app.use(cors());
app.use(express.json());


//routes 
app.use('/api/v1/advocates',AdvocateRoute);
app.use('/api/v1/user',UserRoute);

app.use(notFound);
app.use(globalErrorHandelar);

export default app;
