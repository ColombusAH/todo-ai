import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly repository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.repository.find();
  }

  async findOneById(id: string): Promise<Todo | null> {
    return this.repository.findOne({ where: { id } });
  }

  async createTodo(data: Partial<Todo>): Promise<Todo> {
    const todo = this.repository.create(data);
    return this.repository.save(todo);
  }

  async updateTodo(id: string, data: Partial<Todo>): Promise<Todo> {
    await this.repository.update(id, data);
    return this.findOneById(id); // Fetch the updated entity
  }

  async deleteTodo(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}