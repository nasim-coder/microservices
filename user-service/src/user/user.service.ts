import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './CreateUserDto';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: ConfigService
  ){}
  async createUser(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    if (!name || !email || !password) {
      throw new BadRequestException('Name, email, and password is required');
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

  async login(createUserDto: CreateUserDto): Promise<{}> {
    console.log('this.configService.get("jwtsecret")', this.configService.get('jwtsecret'));
    
    const {email, password} = createUserDto;

    const user: User = await User.findOneBy({email});

    if(!user){
      throw new BadRequestException('email or password is incorect')
    }

    const isPasswordMatched: boolean = await bcrypt.compare(password, user.password)

    if(!isPasswordMatched){
      throw new BadRequestException('email or password is incorrect')
    }

    const token: string = jwt.sign({name: user.name, email: user.email}, this.configService.get('jwtsecret') );

    return {token}

  }
}
