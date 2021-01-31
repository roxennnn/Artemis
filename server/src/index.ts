import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { applyGraphQL } from 'https://deno.land/x/oak_graphql/mod.ts';
import dinoResolvers from './resolvers/dino.resolver.ts';
import dinoSchema from './schemas/dino.schema.ts';

const app = new Application();

// const router: Router = new Router();
// router.post('/graphql');

const GraphQLService = await applyGraphQL({
  Router: Router,
  typeDefs: dinoSchema,
  resolvers: dinoResolvers,
});

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

console.log('Server started at http://localhost:8080');
app.use((ctx) => {
  ctx.response.body = 'Hello, Artemis!';
});
await app.listen({ port: 8080 }).catch((err) => console.log(err));
