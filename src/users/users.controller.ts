import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  async getUsers() {
    const user = await this.service.findOne('afarfanp');
    return user;
  }
}
