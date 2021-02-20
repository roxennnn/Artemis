import { ObjectId } from 'mongodb';
import { Service } from 'typedi';
import { Todo } from '../../entities';
import { NewTodoInput } from './input';
import TodoModel from './model';

@Service() // Dependencies injection
export default class TodoService {
  constructor(private readonly todoModel: TodoModel) {}

  public async getById(_id: ObjectId): Promise<Todo | null> {
    console.log(_id);
    return this.todoModel.getById(_id);
  }

  public async addTodo(data: NewTodoInput): Promise<Todo> {
    const newTodo = await this.todoModel.create(data);

    // Business logic goes here
    // Example:
    // Trigger push notification, analytics, ...

    return newTodo;
  }
}
