"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const config_1 = require("../../config");
const utils_1 = require("../../utils");
exports.default = async () => {
    const schema = await utils_1.buildSchema();
    return new apollo_server_express_1.ApolloServer({
        schema,
        playground: config_1.config.isDev,
    });
};
//# sourceMappingURL=apollo.js.map