import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const listening = await app.listen(2024);
  if (listening) {
    console.log('listening on port 2024');
  }
}
bootstrap();
