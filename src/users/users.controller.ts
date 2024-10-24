import { Controller, Get, Post } from "@nestjs/common";


@Controller("users")
export class UsersController {

    @Get()
    findUsers(): string {
        return "Find All users"
    }

    @Post()
    addUser(): string {
        return "Add user"
    }
}