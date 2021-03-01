import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { User } from '../../entities';
import { Context } from '../../models/context.model';
import { CustomError } from '../../utils/custom-error';
import { SignUpUserInput } from './input';
import { SignInUserOutput } from './output';
import UserService from './service';

@Service() // Dependencies injection
@Resolver((of) => User)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Authorized()
  @Query((returns) => User)
  async getUser(
    @Arg('username') username: string,
    @Ctx() context: Context
  ): Promise<User | null> {
    const queryingUser =
      context && context.user && context.user.id ? context.user.id : '';
    const user = await this.userService.getUserByUsername(
      username,
      queryingUser
    );
    return user;
  }

  @Query((returns) => SignInUserOutput)
  async signInUser(
    @Arg('username') username: string,
    @Arg('password') password: string
  ): Promise<SignInUserOutput | null> {
    try {
      const user = await this.userService.signInUser(username, password);
      return user;
    } catch (err) {
      throw new CustomError(
        'UserResolver-signInUser-catch Error: ' + err.message,
        err.statusCode ? err.statusCode : 500
      );
    }
  }

  @Mutation((returns) => User)
  async signUpUser(
    @Arg('signUpUserData') signUpUserData: SignUpUserInput
  ): Promise<User> {
    try {
      const user = await this.userService.addUser(signUpUserData);
      return user;
    } catch (err) {
      throw new CustomError(
        'UserResolver-signUpUser-catch Error: ' + err.message,
        err.statusCode ? err.statusCode : 500
      );
    }
  }
}
