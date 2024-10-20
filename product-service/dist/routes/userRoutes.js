"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // Define user routes
        this.router.post('/', user_controller_1.default.createUser);
        this.router.get('/:id', user_controller_1.default.getUser);
        this.router.put('/:id', user_controller_1.default.updateUser);
        this.router.delete('/:id', user_controller_1.default.deleteUser);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = new UserRoutes().getRouter();
