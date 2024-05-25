import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './CreateUserDto';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { IntegerType, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const { name, email, password, role } = createUserDto;

    if (!name || !email || !password) {
      throw new BadRequestException('Name, email, and password is required');
    }

    const user =  await this.userRepository.findOneBy({ email });
    
    if (user) {
      throw new BadRequestException('User already exist');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = hashedPassword;
    newUser.role = role;
    const created = await newUser.save();
    console.log('created', created);

    return created;
  }

  async login(createUserDto: CreateUserDto): Promise<{}> {

    const { email, password } = createUserDto;

    const user: User = await this.userRepository.findOneBy({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid credentilas.');
    }

    const isPasswordMatched: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    const payload = { email: user.email, sub: user.id, role: user.role };
    const token: string = jwt.sign(
      payload,
      this.configService.get('JWT_SECRET'),
    );

    return { token };
  }

  async profile(id: number) {
    const profile = await this.userRepository.findOne({
      where: { id },
      select: ['id', 'name', 'email'], // Specify the fields you want to select
    });

    if (!profile) {
      throw new BadRequestException('User not found.');
    }
    return profile;
  }
}
