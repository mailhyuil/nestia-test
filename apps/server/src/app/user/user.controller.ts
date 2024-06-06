/*
https://docs.nestjs.com/controllers#controllers
*/

import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @TypedRoute.Get()
  async findAll() {
    return this.userService.findAll();
  }
  @TypedRoute.Get(':id')
  async findById(@TypedParam('id') id: string) {
    return this.userService.findById(id);
  }
  @TypedRoute.Post()
  async create(@TypedBody() body: CreateUserDto) {
    return this.userService.create(body);
  }
  @TypedRoute.Put(':id')
  async update(@TypedParam('id') id: string, @TypedBody() body: CreateUserDto) {
    return this.userService.update(id, body);
  }
  @TypedRoute.Delete(':id')
  async delete(@TypedParam('id') id: string) {
    this.userService.delete(id);
  }
}
