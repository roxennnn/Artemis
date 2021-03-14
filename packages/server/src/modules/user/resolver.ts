import { SurveyEnum } from 'common-models';
import {
  Arg,
  Authorized,
  Ctx,
  Int,
  Mutation,
  Query,
  registerEnumType,
  Resolver,
} from 'type-graphql';
import { Service } from 'typedi';
import { User } from '../../entities';
import { Context } from '../../models/context.model';
import { CustomError } from '../../utils/custom-error';
import { SignUpUserInput } from './input';
import { SignInUserOutput } from './output';
import UserService from './service';

registerEnumType(SurveyEnum, {
  name: 'SurveyEnum',
  description: 'The different type of surveys',
});

@Service() // Dependencies injection
@Resolver((of) => User)
export default class UserResolver {
  constructor(private readonly userService: UserService) {}

  /* Authentication */
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

  /***************************************
   *         Need to be authorised       *
   ***************************************/
  // @Debug
  // @Authorized()
  // @Query((returns) => User)
  // async getUser(
  //   @Arg('username') username: string,
  //   @Ctx() context: Context
  // ): Promise<User | null> {
  //   const queryingUser = context?.user?.id;
  //   const user = this.userService.getUserByUsername(username, queryingUser);
  //   return user;
  // }

  @Authorized()
  @Mutation((returns) => User)
  async surveyAction(
    @Arg('survey', (type) => SurveyEnum) survey: SurveyEnum,
    @Arg('answers', (type) => [Int], { defaultValue: [] }) answers: number[],
    @Ctx() context: Context
  ): Promise<User | null> {
    const userId = context?.user?.id || '';
    return this.userService.surveyAction(userId, survey, answers);
  }
}
