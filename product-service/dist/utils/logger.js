"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    constructor(moduleName) {
        this.moduleName = moduleName;
    }
    log(message) {
        console.log(`[LOG] ${new Date().toISOString()} [${this.moduleName}]: ${message}`);
    }
    error(message) {
        console.error(`[ERROR] ${new Date().toISOString()} [${this.moduleName}]: ${message}`);
    }
}
exports.default = Logger;
