// src/types/express.d.ts
import { Request } from 'express';

declare module 'express' {
    interface Request {
        user?: any; // Replace `any` with the actual type if you have one
    }
}
