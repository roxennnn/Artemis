import dinoDb from '../config/dino-db.config.ts';
import userDb from '../config/user-db.config.ts';

export default {
  Query: {
    getDino: async (_: any, { name }: { name: string }) => {
      console.log(_);
      try {
        const dino = await dinoDb.findOne({ name: name });
        if (!dino) {
          throw new Error(`No dino name includes "${name}"`);
        }
        return dino;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    getUsers: async () => {
      try {
        const dino = await userDb.find().toArray();
        console.log(dino);
        if (!dino || dino.length === 0) {
          // throw new Error(`No dino name includes "${name}"`);
        }
        return dino;
        // return [{ name: name, image: 'test7' }];
      } catch (err) {
        return err;
      }
    },
    getDinos: () => {
      try {
        return dinoDb.find({ name: { $ne: null } }).toArray();
      } catch (err) {
        return err;
      }
    },
  },
  Mutation: {
    addDino: (_: any, { input: { name, image } }: any) => {
      try {
        dinoDb.insert({
          name,
          image,
        });
        return {
          done: true,
        };
      } catch (err) {
        return err;
      }
    },
  },
};
