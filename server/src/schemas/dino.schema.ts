import { gql } from 'https://deno.land/x/oak_graphql/mod.ts';

export default gql`
  type Dino {
    name: String
    image: String
  }
  type User {
    username: String
    email: String
    password: String
    eth_address: String
    priv_key: String
    demographics_done: Boolean
    demographics_timestamp: String
    skills_done: Boolean
    skills_timestamp: String
    domestic_done: Boolean
    domestic_timestamp: String
  }
  input DinoInput {
    name: String
    image: String
  }
  type ResolveType {
    done: Boolean
  }
  type Query {
    getDino(name: String): Dino
    getDinos: [Dino!]!
    getUsers: [User!]!
  }
  type Mutation {
    addDino(input: DinoInput!): ResolveType!
  }
`;
