import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getEndOfDay, getStartOfDay } from 'src/utils/functions';
import { Between, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskStatus } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskModel: Repository<Task>
  ) { }
  create(createTaskDto: CreateTaskDto, userId: string) {
    return this.taskModel.save({ ...createTaskDto, user: userId });
  }

  findAll(userId: string) {
    return this.taskModel.find({ where: { user: { id: userId }}});
  }

  findOne(id: string, userId: string) {
    return this.taskModel.findOne({ where: { id, user: { id: userId }}});
  }

  findStatus(status: TaskStatus, userId: string) {
    return this.taskModel.find({ where: { status: status, user: { id: userId }}});
  }

  findInRange(start: string, end: string, userId: string) {
    return this.taskModel.find({ where: {
      dueDate: Between(getStartOfDay(start), getEndOfDay(end)),
      user: { id: userId }
    }});
  }

  update(id: string, updateTaskDto: UpdateTaskDto, userId: string) {
    return this.taskModel.update({ id, user: { id: userId }}, updateTaskDto);
  }

  remove(id: string, userId: string) {
    return this.taskModel.softDelete({ id, user: { id: userId }});
  }
}
