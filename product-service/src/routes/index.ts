import { Router } from 'express';
import  userRoutes  from './product.routes'
const mainRouter = Router();

mainRouter.use('/product', userRoutes);

export default mainRouter;