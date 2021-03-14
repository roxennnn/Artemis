import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import { decode } from 'jsonwebtoken';
import { config } from '../../config';
import { buildSchema } from '../../utils';
import { CustomError } from '../../utils/custom-error';

export default async () => {
  const schema: GraphQLSchema = await buildSchema();

  return new ApolloServer({
    schema,
    context: ({ req }) => {
      // Get the user token from the headers.
      const token = req.headers.authorization || '';

      // HTTP standard
      if (token.startsWith('Bearer ')) {
        /* Check Token */
        const decoded = decode(token.substring(7));
        if (!!decoded) {
          return {
            user: {
              authorized: true, // mandatory
              ...(decoded as { [key: string]: string }),
            },
          };
        }
      }
      throw new CustomError('Unauthorized', 401);
    },
    playground: config.isDev,
  });
};
