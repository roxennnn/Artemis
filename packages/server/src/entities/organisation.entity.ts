import { prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Organisation {
  @Field()
  readonly _id!: ObjectId;

  @prop({ required: true })
  @Field()
  organisationName!: string; // organisations do not use usernames...

  @prop({ required: true })
  @Field()
  email!: string;

  @prop({ required: true })
  @Field()
  password!: string;

  @prop({ required: true })
  @Field()
  ethAddress!: string;

  @prop({ required: true })
  @Field()
  privKey!: string;

  @prop({ default: false })
  @Field()
  validated: boolean;
}
