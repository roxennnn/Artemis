"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const type_graphql_1 = require("type-graphql");
const typedi_1 = __importDefault(require("typedi"));
const modules_1 = require("../modules");
const _1 = require("./");
// Here goes your schema building bit, doing it this way allows us to use it in the tests as well!
exports.buildSchema = () => type_graphql_1.buildSchema({
    resolvers: modules_1.resolvers,
    container: typedi_1.default,
    scalarsMap: [{ type: mongodb_1.ObjectId, scalar: _1.ObjectIdScalar }],
});
//# sourceMappingURL=buildSchema.js.map