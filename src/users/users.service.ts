import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

var userPath = join(process.cwd(), '/src/files/users.json');
var userData = readFileSync(userPath).toString();

@Injectable()
export class UsersService {
  users: User[] = JSON.parse(userData);

  async create(createUserDto: CreateUserDto) {
    this.users.push({
      ...createUserDto,
      userId: this.users.length + 1,
    });

    try {
      const frameworksData = JSON.stringify(this.users);

      writeFileSync(userPath, frameworksData, 'utf-8');

      return this.users;
    } catch (error) {
      console.log(`WRITE ERROR: ${error}`);
    }
  }

  async findAll(pageNo: number, pageRows: number) {
    return {
      pageNo: pageNo,
      pageRows: pageRows,
      recordTotal: this.users.length,
      data: this.users,
    };
  }

  async findOne(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.userId === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
