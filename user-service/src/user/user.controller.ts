import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './CreateUserDto';

@Controller('user')
export class UserController {

  @Post('signup')
  signup(@Body createUserDto: CreateUserDto) {

  }
}
