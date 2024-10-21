import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: any
        }
    }
}

const authenticate = (req: Request, res: Response, next: NextFunction) => {

    try {

        const secret = process.env.JWT_SECRET;

        if (!secret) throw new Error('Unable to read secret from env');

        const tokenHeader = req?.headers?.authorization;

        const token = tokenHeader?.split(' ')[1];

        if (!token) return res.status(401).send({ message: 'Authentication is required', statusCode: 401 });

        const user = jwt.verify(token, secret);

        if (!user) return res.status(403).send({ message: 'Authentication failed', statusCode: 403 });

        req.user = user;

        next();

    } catch (err: any) {
        return res.status(403).send({ message: err.message, statusCode: 403 });
    }

}

export default authenticate;