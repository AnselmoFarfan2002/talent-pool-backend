import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProvider } from './users.provider';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [SequelizeModule, UsersService],
})
export class UsersModule {}
