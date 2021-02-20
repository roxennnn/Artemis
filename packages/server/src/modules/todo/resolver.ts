import { ObjectId } from 'mongodb';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { Todo } from '../../entities';
import { NewTodoInput } from './input';
import TodoService from './service';

/*
  IMPORTANT: Your business logic must be in the service!
*/

@Service() // Dependencies injection
@Resolver((of) => Todo)
export default class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query((returns) => Todo)
  async getTodo(@Arg('id') id: ObjectId) {
    console.log(id);
    const todo = await this.todoService.getById(id);

    return todo;
  }

  @Mutation((returns) => Todo)
  async createTodo(
    @Arg('createTodoData') createTodoData: NewTodoInput
  ): Promise<Todo> {
    const todo = await this.todoService.addTodo(createTodoData);
    return todo;
  }
}
