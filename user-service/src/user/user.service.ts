import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './CreateUserDto';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    if (!name || !email || !password) {
      throw new BadRequestException('Name, email, and password are required');
    }
    const user = await User.findOneBy({ email });
    if (user) {
      throw new BadRequestException('User already exist');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = hashedPassword;
    const created = await newUser.save();
    console.log('created', created);

    return created;
  }
}
