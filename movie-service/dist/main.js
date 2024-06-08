"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get('PORT', 2025);
    const listening = await app.listen(3000);
    if (listening)
        console.log(`movie service running on port: ${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map