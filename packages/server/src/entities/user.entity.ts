// Typegoose
// https://typegoose.github.io/typegoose/docs/api/decorators/prop/
// TypeGraphQL
// https://typegraphql.com/docs/types-and-fields.html
import { prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, Int, ObjectType } from 'type-graphql';

// @Field(() => Rate)
// @Field(type => [Rate])
// @Field(() => [[Item]] would by defaut produce [[Item!]!]!,
// setting nullable: "itemsAndList" would produce [[Item]] while nullable: "items" would produce [[Item]]!
// By default, all fields are non nullable, just like properties in TypeScript.
// However, you can change that behavior by providing nullableByDefault: true option in buildSchema settings

@ObjectType({ description: 'The user model' })
export class User {
  @Field()
  readonly _id!: ObjectId;

  @prop({ required: true })
  @Field()
  username!: string;

  @prop({ required: true })
  @Field()
  email!: string;

  @prop({ required: true })
  // @Field()
  password!: string;

  @prop({ required: true })
  @Field()
  ethAddress!: string;

  @prop({ required: true })
  // @Field()
  privKey!: string;

  /* Surveys */
  @prop({ default: false })
  @Field()
  demographicsDone?: boolean;

  @prop()
  @Field({ nullable: true })
  demographicsTimestamp?: string;

  @prop({ type: [Number] })
  @Field(() => [Int], { nullable: true })
  demographicsAnswers?: number[];

  @prop({ default: false })
  @Field()
  skillsDone?: boolean;

  @prop()
  @Field({ nullable: true })
  skillsTimestamp?: string;

  @prop({ type: [Number] })
  @Field(() => [Int], { nullable: true })
  skillsAnswers?: number[];

  @prop({ default: false })
  @Field()
  domesticDone?: boolean;

  @prop()
  @Field({ nullable: true })
  domesticTimestamp?: string;

  @prop({ type: [Number] })
  @Field(() => [Int], { nullable: true })
  domesticAnswers?: number[];
}
