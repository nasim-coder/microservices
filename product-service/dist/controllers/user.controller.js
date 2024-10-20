"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../models/product.model"));
const logger_1 = __importDefault(require("../utils/logger"));
class UserController {
    constructor() {
        this.logger = new logger_1.default('UserController');
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = new product_model_1.default(req.body);
                yield user.save();
                this.logger.log(`User created: ${user}`);
                res.status(201).json(user);
            }
            catch (error) {
                this.logger.error(`Failed to create user: ${error.message}`);
                res.status(400).json({ error: error.message });
            }
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield product_model_1.default.findById(req.params.id);
                if (!user) {
                    res.status(404).json({ error: 'User not found' });
                    return;
                }
                res.status(200).json(user);
            }
            catch (error) {
                this.logger.error(`Failed to get user: ${error.message}`);
                res.status(500).json({ error: error.message });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield product_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (!user) {
                    res.status(404).json({ error: 'User not found' });
                    return;
                }
                res.status(200).json(user);
            }
            catch (error) {
                this.logger.error(`Failed to update user: ${error.message}`);
                res.status(500).json({ error: error.message });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield product_model_1.default.findByIdAndDelete(req.params.id);
                if (!user) {
                    res.status(404).json({ error: 'User not found' });
                    return;
                }
                res.status(204).send();
            }
            catch (error) {
                this.logger.error(`Failed to delete user: ${error.message}`);
                res.status(500).json({ error: error.message });
            }
        });
    }
}
exports.default = new UserController();
