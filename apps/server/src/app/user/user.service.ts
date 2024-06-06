import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateUserDto, UserDto } from '../../../../common/src/dto/user.dto';
const users: UserDto[] = [
  {
    id: uuid(), // uuid
    name: 'John Doe',
    email: 'john@naver.com',
    password: '123456',
  },
  {
    id: uuid(),
    name: 'Hyuil',
    email: 'mailhyuil@gmail.com',
    password: '123456',
  },
];

@Injectable()
export class UserService {
  findById(id: string) {
    return users.find((user) => user.id === id);
  }
  findAll() {
    return users;
  }
  create(data: CreateUserDto) {
    const id = uuid();
    const { password, passwordConfirm, ...rest } = data;
    if (password !== passwordConfirm) throw new Error('Password not match');
    const newUser: UserDto = { id, password, ...rest };
    users.push(newUser);
    return newUser;
  }
  update(id: string, data: CreateUserDto) {
    const foundIndex = users.findIndex((user) => user.id === id);
    if (foundIndex < 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const updated: UserDto = { ...users[foundIndex], ...data };
    users[foundIndex] = updated;
    return updated;
  }
  delete(id: string) {
    const index = users.findIndex((user) => user.id === id);
    users.splice(index, 1);
  }
}
