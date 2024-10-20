import { Router } from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../controllers/product.controller';

const router = Router();

// Define user routes
router.post('/', createUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
