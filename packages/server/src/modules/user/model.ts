import { getModelForClass } from '@typegoose/typegoose';
import { User } from '../../entities';
import { ISignUpUser } from '../../models/user.model';

// This generates the mongoose model for us
// export const UserMongooseModel: mongoose.Model<
//   Document<User>
// > = getModelForClass(User);
export const UserMongooseModel = getModelForClass(User);

export default class UserModel {
  getUserByUsername = async (username: string): Promise<User | null> => {
    // Use mongoose as usual
    return UserMongooseModel.findOne({
      username: username,
    })
      .lean()
      .exec();
  };

  signUpUser = async (data: ISignUpUser): Promise<User> => {
    const user = new UserMongooseModel(data);
    return user.save();
  };
}
