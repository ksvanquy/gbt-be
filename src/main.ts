import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();

  // app.enableCors({
  //   origin: ['http://localhost:3000', 'https://example.com'], // danh sách domain được phép
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // các method được phép
  //   allowedHeaders: 'Content-Type, Accept, Authorization', // headers được phép
  //   credentials: true, // nếu cần gửi cookie
  // });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
