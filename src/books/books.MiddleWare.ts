import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";



@Injectable()

export class BooksMiddleWare implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("this is class based middle ware implemented in books controller")
        next()
    }
}