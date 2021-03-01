import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Response of a successful sign in' })
export class SignInUserOutput {
  @Field()
  accessToken: string;

  @Field()
  username: string;

  @Field({ nullable: true })
  demographicsDone?: boolean;

  @Field({ nullable: true })
  demographicsTimestamp?: string;

  @Field({ nullable: true })
  domesticDone?: boolean;

  @Field({ nullable: true })
  domesticTimestamp?: string;

  @Field({ nullable: true })
  skillsDone?: boolean;

  @Field({ nullable: true })
  skillsTimestamp?: string;
}
