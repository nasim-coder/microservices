"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = __importDefault(require("./userRoutes"));
// import ProductRoutes from './productRoutes';
class Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.use('/product', userRoutes_1.default); // Mounting user routes under /api/users
        // this.router.use('/api/products', ProductRoutes); // Mounting product routes under /api/products
    }
    getRouter() {
        return this.router;
    }
}
exports.default = new Routes().getRouter();
