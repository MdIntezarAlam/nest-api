import { Controller, Get, Post } from "@nestjs/common";


@Controller("books")
export class BooksController {

    @Get()
    getBooks(): string {
        return "Get All books"
    }

    @Post()
    addBooks(): string {
        return "Add books"
    }

}