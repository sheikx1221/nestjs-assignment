import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UnauthorizedException } from '@nestjs/common';
import { IRequest } from 'types/express';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskStatus } from './entities/task.entity';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @Request() request: IRequest) {
    if (request.user && request.user.id) {
      return this.taskService.create(createTaskDto, request.user.id);
    }
    else throw new UnauthorizedException();
  }

  @Get()
  findAll(@Request() request: IRequest) {
    if (request.user && request.user.id) {
      return this.taskService.findAll(request.user.id);
    }
    else throw new UnauthorizedException();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() request: IRequest) {
    if (request.user && request.user.id) {
      return this.taskService.findOne(id, request.user.id);      
    }
    else throw new UnauthorizedException();
  }
  
  @Get('status/:status')
  findStatus(@Param('status') status: TaskStatus, @Request() request: IRequest) {
    if (request.user && request.user.id) {
      return this.taskService.findStatus(status, request.user.id);
    }
    else throw new UnauthorizedException();
  }
  
  @Get('range/:start/:end')
  findInRange(@Param('start') start: string, @Param('end') end: string, @Request() request: IRequest) {
    if (request.user && request.user.id) {
      if (!start && !end) return [];
      else if (!start) start = end;
      else if (!end) end = start;
  
      return this.taskService.findInRange(start, end, request.user.id);
    }
    else throw new UnauthorizedException();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto, @Request() request: IRequest) {
    if (request.user && request.user.id) {
      return this.taskService.update(id, updateTaskDto, request.user.id);
    }
    else throw new UnauthorizedException();

  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() request: IRequest) {
    if (request.user && request.user.id) {
      return this.taskService.remove(id, request.user.id);
    }
    else throw new UnauthorizedException();
  }
}
