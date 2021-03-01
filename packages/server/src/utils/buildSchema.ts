import { ObjectId } from 'mongodb';
import {
  AuthChecker,
  buildSchema as typeGraphqlBuildSchema,
} from 'type-graphql';
import Container from 'typedi';
import { Context } from '../models/context.model';
import { resolvers } from '../modules';
import { ObjectIdScalar } from './';

const authChecker: AuthChecker<Context> = ({ context: { user } }, roles) => {
  // here we can read the user from context
  // and check his permission in the db against the `roles` argument
  // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]

  console.log(user);
  if (user?.authorized) {
    return true;
  } else {
    return false;
  }
};

// Here goes your schema building bit, doing it this way allows us to use it in the tests as well!
export const buildSchema = () =>
  typeGraphqlBuildSchema({
    resolvers,
    container: Container,
    scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    authChecker: authChecker,
  });
