import { Router } from 'express';
import UserRoutes from './userRoutes';
// import ProductRoutes from './productRoutes';

class Routes {
    private router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use('/users', UserRoutes); // Mounting user routes under /api/users
        // this.router.use('/api/products', ProductRoutes); // Mounting product routes under /api/products
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default new Routes().getRouter();
