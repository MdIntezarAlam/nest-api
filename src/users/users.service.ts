import { Injectable } from "@nestjs/common";



@Injectable()
export class UsersService {
    findAllUsers() {
        return "Find All users"
    }
    addUsers() {
        return "user added successfully"
    }
}