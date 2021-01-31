import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { MongoClient } from 'https://deno.land/x/mongo@v0.21.0/mod.ts';
import { User } from '../models/user.model.ts';

const env = config({
  path: 'src/.env',
});

const client = new MongoClient();
await client.connect(env.DB_SERVER);

const db = client.database(env.DB_NAME);
const users = db.collection<User>('users');

export default users;
