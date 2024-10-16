import express from 'express';
import { create, productlist } from '../controller/product.controller.js';

const productRouter = express.Router();

// Define routes
productRouter.post('/product', create);
productRouter.get('/product', productlist);

export default productRouter;
