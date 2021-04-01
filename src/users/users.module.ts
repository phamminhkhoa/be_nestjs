import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';


@Module({
 // imports: [TypeOrmModule.forFeature([Users, UsersRepository])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
