import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../../entities';
import { ISignUpUser } from '../../models/user.model';
import { CustomError } from '../../utils/custom-error';

// This generates the mongoose model for us
// export const UserMongooseModel: mongoose.Model<
//   Document<User>
// > = getModelForClass(User);
export const UserMongooseModel = getModelForClass(User);

export default class UserModel {
  getUsers = async (): Promise<User[] | null> => {
    return UserMongooseModel.find().lean().exec();
  };

  getUserByUsername = async (
    username: string,
    queryingUser?: string
  ): Promise<User | null> => {
    const foundUser = await UserMongooseModel.findOne({
      username: username,
    })
      .lean()
      .exec();

    if (!!queryingUser && String(foundUser._id) !== queryingUser) {
      throw new CustomError(
        'Unauthorized: you can only access your own data',
        401
      );
    }

    return foundUser;
  };

  getUserByEmail = async (email: string): Promise<User | null> => {
    return UserMongooseModel.findOne({
      email: email,
    })
      .lean()
      .exec();
  };

  signUpUser = async (data: ISignUpUser): Promise<User> => {
    const user = new UserMongooseModel(data);
    return user.save();
  };
}
