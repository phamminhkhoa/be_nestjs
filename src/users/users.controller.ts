import { Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import {UsersDto} from './users.dto'


@Controller('users')
export class UsersController {

  @Post()
  createUser(@Body() userDto: UsersDto){
    return userDto
  }

  @Get()
  getUsers() {
    return 'get all user';
  }

  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return `get user with the id ${id}`;
  }

  @Put(':id')
  updateUser(@Param('id') id: string) {
    return ` update user with the id ${id}`;
  }

}
