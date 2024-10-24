import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UserModule, BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
