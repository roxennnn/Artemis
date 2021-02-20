import { prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Todo {
  @Field()
  readonly _id!: ObjectId;

  @prop()
  @Field(() => Date)
  createdAt!: Date;

  @prop()
  @Field(() => Date)
  updatedAt!: Date;

  @prop()
  @Field()
  content!: string;

  @prop({ default: false })
  @Field()
  isDone!: boolean;
}
