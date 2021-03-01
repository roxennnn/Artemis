import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import { decode } from 'jsonwebtoken';
import { config } from '../../config';
import { buildSchema } from '../../utils';

export default async () => {
  const schema: GraphQLSchema = await buildSchema();

  return new ApolloServer({
    schema,
    context: ({ req }) => {
      // Get the user token from the headers.
      const token = req.headers.authorization || '';

      /* Check Token */
      const decoded = decode(token);

      return {
        user: {
          authorized: !!decoded,
          ...(decoded as { [key: string]: string }),
        },
      };
    },
    playground: config.isDev,
  });
};
