import { Router } from 'express';
import userController from '../controllers/user.controller';

class UserRoutes {
    private router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        // Define user routes
        this.router.post('/', userController.createUser); 
        this.router.get('/:id', userController.getUser); 
        this.router.put('/:id', userController.updateUser); 
        this.router.delete('/:id', userController.deleteUser); 
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default new UserRoutes().getRouter();
