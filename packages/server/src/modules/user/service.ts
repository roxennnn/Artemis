import { compareSync, hashSync } from 'bcryptjs';
import { SurveyEnum } from 'common-models';
import Wallet from 'ethereumjs-wallet';
import { sign } from 'jsonwebtoken';
import { Service } from 'typedi';
import { config } from '../../config';
import { User } from '../../entities';
import { ISignUpUser } from '../../models/user.model';
import { CustomError } from '../../utils/custom-error';
import { SignUpUserInput } from './input';
import UserModel from './model';
import { SignInUserOutput } from './output';

@Service() // Dependencies injection
export default class UserService {
  constructor(private readonly userModel: UserModel) {}

  public getUserByUsername = async (
    username: string,
    queryingUser?: string
  ): Promise<User | null> => {
    return this.userModel.getUserByUsername(username, queryingUser);
  };

  private getUserByEmail = async (email: string): Promise<User | null> => {
    return this.userModel.getUserByEmail(email);
  };

  /* Authentication */
  private checkDuplicate = async (
    username: string,
    email: string
  ): Promise<boolean> => {
    // returns true if a duplicate is found
    const users: User[] | null = await this.userModel.getUsers();
    if (users) {
      for (const user of users) {
        if (username === user.username || compareSync(email, user.email)) {
          return true;
        }
      }
    }
    return false;
  };

  public addUser = async (data: SignUpUserInput): Promise<User> => {
    try {
      const isDuplicate = await this.checkDuplicate(data.username, data.email);
      if (isDuplicate) {
        throw new CustomError('Username or email already registered', 409);
      }

      // Generate a public(address)-private key pair
      const addressData = Wallet.generate();

      // User
      const userData: ISignUpUser = {
        username: data.username,
        email: hashSync(data.email, 8),
        password: hashSync(data.password, 8),
        ethAddress: addressData.getAddressString(),
        privKey: addressData.getPrivateKey().toString(),
      };

      const newUser = this.userModel.signUpUser(userData);

      return newUser;
    } catch (err) {
      throw new CustomError(
        'UserService-addUser-catch Error: ' + err.message,
        err.statusCode ? err.statusCode : 500
      );
    }
  };

  public async signInUser(
    username: string,
    password: string
  ): Promise<SignInUserOutput> {
    try {
      const user: User | null = await this.userModel.getUserByUsername(
        username
      );
      if (!user) {
        throw new CustomError('Invalid Credentials', 401); // Invalid Username
      }
      const passwordIsValid = compareSync(password, user.password);
      if (!passwordIsValid) {
        throw new CustomError('Invalid Credentials', 401); // Invalid Password
      }

      return {
        accessToken: sign({ id: user._id }, config.secret, {
          expiresIn: 3600, // 1hour --> Add token refresh mechanism
        }),
        username: username,
        demographicsDone: user.demographicsDone,
        demographicsTimestamp: user.demographicsTimestamp,
        domesticDone: user.domesticDone,
        domesticTimestamp: user.domesticTimestamp,
        skillsDone: user.skillsDone,
        skillsTimestamp: user.skillsTimestamp,
      };
    } catch (err) {
      throw new CustomError(
        'UserService-signInUser-catch Error: ' + err.message,
        err.statusCode ? err.statusCode : 500
      );
    }
  }

  /* Surveys */
  // Move to blockchain in the future
  public surveyAction = async (
    userId: string,
    survey: SurveyEnum,
    answers: number[]
  ): Promise<User | null> => {
    if (answers.length > 0) {
      return this.userModel.submitSurvey(userId, survey, answers);
    } else {
      return this.userModel.resetSurvey(userId, survey);
    }
  };
}
