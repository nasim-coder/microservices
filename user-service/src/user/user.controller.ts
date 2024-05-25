import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './CreateUserDto';
import { UserService } from './user.service';
import { AuthGuard } from 'src/common/guards/auth.guard';

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

  @UseGuards(AuthGuard)
  @Get('profile/:id')
  async profile(@Param('id', ParseIntPipe) id: number) {
    const profile = await this.userService.profile(id);
    return profile;
  }
}
