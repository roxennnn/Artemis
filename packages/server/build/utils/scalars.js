"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const mongodb_1 = require("mongodb");
exports.ObjectIdScalar = new graphql_1.GraphQLScalarType({
    name: 'ObjectId',
    description: 'Mongo object id scalar type',
    parseValue(value) {
        return new mongodb_1.ObjectId(value); // value from the client input variables
    },
    serialize(value) {
        return value.toHexString(); // value sent to the client
    },
    parseLiteral(ast) {
        if (ast.kind === graphql_1.Kind.STRING) {
            return new mongodb_1.ObjectId(ast.value); // value from the client query
        }
        return null;
    },
});
//# sourceMappingURL=scalars.js.map