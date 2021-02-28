import { hashSync } from 'bcryptjs';
import Wallet from 'ethereumjs-wallet';
import { Service } from 'typedi';
import { User } from '../../entities';
import { ISignUpUser } from '../../models/user.model';
import { CustomError } from '../../utils/custom-error';
import { NewUserInput } from './input';
import UserModel from './model';

@Service() // Dependencies injection
export default class UserService {
  constructor(private readonly userModel: UserModel) {}

  public async getUserByUsername(username: string): Promise<User | null> {
    return this.userModel.getUserByUsername(username);
  }

  public async addUser(data: NewUserInput): Promise<User> {
    try {
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

      const newUser = await this.userModel.signUpUser(userData);

      return newUser;
    } catch (err) {
      throw new CustomError(
        'UserService-addUser-catch Error:\n' + err.message,
        500
      );
    }
  }
}
