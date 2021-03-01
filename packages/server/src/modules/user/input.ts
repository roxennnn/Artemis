import { IsEmail, MinLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class SignUpUserInput {
  @Field()
  @MinLength(1)
  username: string;

  @Field()
  @MinLength(8)
  password: string;

  @Field()
  @IsEmail()
  email: string;
}
