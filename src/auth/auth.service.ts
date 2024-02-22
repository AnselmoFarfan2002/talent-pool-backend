import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async logIn(username: string, password: string) {
    const user = await this.usersService.findOne(username);

    if (!user) return new NotFoundException('User not found');

    const isValid = await compare(password, user.PASSWORD);
    if (isValid) return user;

    throw new UnauthorizedException();
  }
}
