import User from '../models/userModel';
import Logger from '../utils/logger';
import { Request, Response } from 'express';

class UserController {
    private logger: Logger;

    constructor() {
        this.logger = new Logger('UserController');
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        try {
            const user = new User(req.body);
            await user.save();
            this.logger.log(`User created: ${user}`);
            res.status(201).json(user);
        } catch (error: any) {
            this.logger.error(`Failed to create user: ${error.message}`);
            res.status(400).json({ error: error.message });
        }
    }

    public async getUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(200).json(user);
        } catch (error: any) {
            this.logger.error(`Failed to get user: ${error.message}`);
            res.status(500).json({ error: error.message });
        }
    }

    public async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(200).json(user);
        } catch (error: any) {
            this.logger.error(`Failed to update user: ${error.message}`);
            res.status(500).json({ error: error.message });
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(204).send();
        } catch (error: any) {
            this.logger.error(`Failed to delete user: ${error.message}`);
            res.status(500).json({ error: error.message });
        }
    }
}

export default new UserController();
