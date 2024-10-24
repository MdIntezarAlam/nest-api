import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';


//globals middlewares
function GlobalMiddleWareOne(req: Request, res: Response, next: NextFunction) {
  console.log("GlobalMiddleWareOne")
  next()
}
function GlobalMiddleWareTwo(req: Request, res: Response, next: NextFunction) {
  console.log("GlobalMiddleWareTwo")
  next()
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(GlobalMiddleWareOne)
  app.use(GlobalMiddleWareTwo)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
