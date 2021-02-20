import { prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Todo {
  @Field()
  readonly _id!: ObjectId;

  @prop({ required: true })
  @Field()
  title!: string;

  @prop({ required: true })
  @Field()
  description!: string;

  @prop({ required: true })
  @Field()
  OID!: number;

  @prop({ required: true })
  @Field(() => [String])
  categories!: string[];

  @prop({ required: true })
  @Field(() => [String])
  categoryNames!: string[];

  @prop({ required: true })
  @Field()
  lang!: string;
}
