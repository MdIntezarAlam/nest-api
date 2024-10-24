import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { BooksController } from "./books.controler";
import { BooksMiddleWare } from "./books.MiddleWare";


@Module({
    imports: [],
    controllers: [BooksController],
    providers: []
})
export class BooksModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(BooksMiddleWare).forRoutes("books")
    }
}