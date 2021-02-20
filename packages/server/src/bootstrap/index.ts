import express from 'express';
import mongoose from 'mongoose';
import { Config } from '../config';
import loaders from './loaders';

export default async (config: Config) => {
  const app = express();

  const server = await loaders(app);

  server.applyMiddleware({
    app,
    path: config.graphqlPath,
    // Health check on /.well-known/apollo/server-health
    onHealthCheck: async () => {
      if (mongoose.connection.readyState === 1) return;

      throw new Error();
    },
  });

  app.listen({ port: config.port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${config.port}${config.graphqlPath}`
    )
  );
};
