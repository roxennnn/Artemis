import { getModelForClass } from '@typegoose/typegoose';
import { SurveyEnum } from 'common-models';
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

    if (!!queryingUser && String(foundUser?._id) !== queryingUser) {
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
    // const user = new UserMongooseModel(data);
    // return user.save();
    return UserMongooseModel.create(data);
  };

  /* Surveys */
  submitSurvey = async (
    userId: string,
    survey: SurveyEnum,
    answers: number[]
  ): Promise<User | null> => {
    const currentTimestamp = new Date().toLocaleString('it-IT');
    console.log(currentTimestamp);
    let updated;
    switch (survey) {
      case SurveyEnum.DEMOGRAPHIC:
        updated = await UserMongooseModel.updateOne(
          {
            _id: userId,
          },
          {
            demographicsAnswers: answers,
            demographicsDone: true,
            demographicsTimestamp: currentTimestamp,
          }
        );
        break;
      case SurveyEnum.SKILLS:
        updated = await UserMongooseModel.updateOne(
          {
            _id: userId,
          },
          {
            skillsAnswers: answers,
            skillsDone: true,
            skillsTimestamp: currentTimestamp,
          }
        );
        break;
      case SurveyEnum.DOMESTIC:
        updated = await UserMongooseModel.updateOne(
          {
            _id: userId,
          },
          {
            domesticAnswers: answers,
            domesticDone: true,
            domesticTimestamp: currentTimestamp,
          }
        );
        break;
      default:
        throw new CustomError('Invalid survey', 400);
    }
    if (!!updated) {
      return UserMongooseModel.findOne({
        _id: userId,
      });
    } else {
      throw new CustomError(
        `Something went wrong updating survey: ${survey}`,
        500
      );
    }
  };

  resetSurvey = async (
    userId: string,
    survey: SurveyEnum
  ): Promise<User | null> => {
    let updated;
    switch (survey) {
      case SurveyEnum.DEMOGRAPHIC:
        updated = await UserMongooseModel.update(
          {
            _id: userId,
          },
          {
            demographicsAnswers: undefined,
            demographicsDone: false,
            demographicsTimestamp: undefined,
          }
        );
        break;
      case SurveyEnum.SKILLS:
        updated = await UserMongooseModel.update(
          {
            _id: userId,
          },
          {
            skillsAnswers: undefined,
            skillsDone: false,
            skillsTimestamp: undefined,
          }
        );
        break;
      case SurveyEnum.DOMESTIC:
        updated = await UserMongooseModel.update(
          {
            _id: userId,
          },
          {
            domesticAnswers: undefined,
            domesticDone: false,
            domesticTimestamp: undefined,
          }
        );
        break;
      default:
        throw new CustomError('Invalid survey', 400);
    }
    if (!!updated) {
      return UserMongooseModel.findOne({
        _id: userId,
      });
    } else {
      throw new CustomError(
        `Something went wrong resetting survey: ${survey}`,
        500
      );
    }
  };
}
