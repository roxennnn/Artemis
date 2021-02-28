import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { User } from '../../entities';
import { NewUserInput } from './input';
import UserService from './service';

/*
  IMPORTANT: Your business logic must be in the service!
*/

@Service() // Dependencies injection
@Resolver((of) => User)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async getUser(@Arg('username') username: string): Promise<User | null> {
    const user = await this.userService.getUserByUsername(username);
    return user;
  }

  @Mutation((returns) => User)
  async signUpUser(
    @Arg('signUpUserData') signUpUserData: NewUserInput
  ): Promise<User> {
    const user = await this.userService.addUser(signUpUserData);
    return user;
  }
}
