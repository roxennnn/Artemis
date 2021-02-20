"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Safely get the environment variable in the process
const env = (name) => {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing: process.env['${name}'].`);
    }
    return value;
};
// All your secrets, keys go here
exports.config = {
    port: +env("PORT"),
    graphqlPath: env("GRAPHQL_PATH"),
    isDev: env("NODE_ENV") === "development",
    mongoDB: {
        uri: env("MONGODB_URI"),
    },
    redis: {
        port: +env("REDIS_PORT"),
        host: env("REDIS_HOST"),
    },
};
//# sourceMappingURL=config.js.map