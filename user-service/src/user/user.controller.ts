import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './CreateUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    const newUser = this.userService.createUser(createUserDto);
    return newUser;
  }

  @Post('login')
  loging(@Body() createUserDto: CreateUserDto) {
    const login = this.userService.login(createUserDto);
    return login;
  }
}
