import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async logIn(username: string, password: string) {
    const user = await this.usersService.findOne(username);

    if (!user) return new NotFoundException('User not found');

    const isValid = await compare(password, user.PASSWORD);
    if (!isValid) return new UnauthorizedException();

    const payload = { sub: user.ID_USUARIO, username: user.USUARIO };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
