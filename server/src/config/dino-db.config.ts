import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { MongoClient } from 'https://deno.land/x/mongo@v0.21.0/mod.ts';
import { Dino } from '../models/dino.model.ts';

const env = config({
  path: 'src/.env',
});

const client = new MongoClient();
await client.connect(env.DB_SERVER);

const db = client.database('test');
const dinos = db.collection<Dino>('dinos');

await dinos.drop();

// insertMany
const insertIds = await dinos.insertMany([
  {
    name: 'user1',
    image: 'pass1',
  },
  {
    name: 'user1',
    image: 'pass1',
  },
  {
    name: 'user2',
    image: 'pass2',
  },
]);

export default dinos;

// // findOne
// const user1 = await users.findOne({ _id: insertId });

// // find
// const all_users = await users.find({ username: { $ne: null } });

// // find by ObjectId
// const user1_id = await users.findOne({ _id: new Bson.ObjectId("SOME OBJECTID STRING") });

// // count
// const count = await users.count({ username: { $ne: null } });

// // aggregation
// const docs = await users.aggregate([
//   { $match: { username: "many" } },
//   { $group: { _id: "$username", total: { $sum: 1 } } },
// ]);

// // updateOne
// const { matchedCount, modifiedCount, upsertedId } = await users.updateOne(
//   { username: { $ne: null } },
//   { $set: { username: "USERNAME" } }
// );

// // updateMany
// const { matchedCount, modifiedCount, upsertedId } = await users.updateMany(
//   { username: { $ne: null } },
//   { $set: { username: "USERNAME" } }
// );

// // deleteOne
// const deleteCount = await users.deleteOne({ _id: insertId });

// // deleteMany
// const deleteCount2 = await users.deleteMany({ username: "test" });

// // Skip
// const skipTwo = await users.skip(2).find();

// // Limit
// const featuredUser = await users.limit(5).find();
