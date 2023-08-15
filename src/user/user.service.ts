import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userModel: Repository<User>
  ) { }
  create(createUserDto: CreateUserDto) {
    return this.userModel.save(createUserDto);
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findOne({ where: { id: id }});
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.update({ id: id }, updateUserDto);
  }

  remove(id: string) {
    return this.userModel.softDelete({ id: id });
  }
}
