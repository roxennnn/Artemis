"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongod = new mongodb_memory_server_1.MongoMemoryServer({
    instance: {
        storageEngine: "wiredTiger",
    },
});
/**
 * Populate db with a schema and data for test purpose only
 */
exports.populateDatabase = async (model, data) => {
    try {
        const result = await model.insertMany(data);
        return result;
    }
    catch (err) {
        console.error("populateDatabase failed", err);
        return err;
    }
};
/**
 * Connect to the in-memory database.
 */
exports.connect = async () => {
    const uri = await mongod.getConnectionString(true);
    const mongooseOpts = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        socketTimeoutMS: 10000,
        autoIndex: false,
    };
    await mongoose_1.default.connect(uri, mongooseOpts);
};
/**
 * Drop database, close the connection and stop mongod.
 */
exports.closeDatabase = async () => {
    try {
        await mongoose_1.default.connection.dropDatabase();
        await mongoose_1.default.connection.close();
        await mongod.stop();
    }
    catch (err) {
        console.error("ERROR: closeDatabase :", exports.closeDatabase);
        return err;
    }
};
/**
 * Remove all the data for all db collections.
 */
exports.clearDatabase = async () => {
    const collections = mongoose_1.default.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
};
//# sourceMappingURL=index.js.map