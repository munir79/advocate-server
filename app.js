import express from 'express';
import cors from 'cors';
import { AdvocateRoute } from './src/modules/advocate/advocate.route.js';
import notFound from './src/middlewares/notFound.js';
import globalErrorHandelar from './src/middlewares/globalErrorHandelar.js';
import { UserRoute } from './src/modules/auth/auth.route.js';
import { LegalCaseRoute } from './src/modules/case/case.route.js';
import { fileURLToPath } from 'url';
import path from 'path';
import { HeroRoutes } from './src/modules/hero/hero.route.js';
import { ProfileRouter } from './src/modules/profile/profile.route.js';
import { ServiceRoutes } from './src/modules/services/services.route.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app=express();

//middlewares
app.use(cors());
app.use(express.json());

app.use('/uploads/images', express.static(path.join(__dirname, "uploads/images")));
//routes 
app.use('/api/v1/advocates',AdvocateRoute);
app.use('/api/v1/user',UserRoute);
app.use('/api/v1/legalcase',LegalCaseRoute);
app.use('/api/v1/hero',HeroRoutes);
app.use('/api/v1/profile',ProfileRouter);
app.use('/api/v1/service',ServiceRoutes);

app.use(notFound);
app.use(globalErrorHandelar);

export default app;
