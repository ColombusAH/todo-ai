import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './todos.repository';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(private readonly todoRepository: TodoRepository) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }

  findOne(id: string): Promise<Todo | null> {
    return this.todoRepository.findOneById(id);
  }

  create(data: Partial<Todo>): Promise<Todo> {
    return this.todoRepository.createTodo(data);
  }

  update(id: string, data: Partial<Todo>): Promise<Todo> {
    return this.todoRepository.updateTodo(id, data);
  }

  delete(id: string): Promise<void> {
    return this.todoRepository.deleteTodo(id);
  }
}
