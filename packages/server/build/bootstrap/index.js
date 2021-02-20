"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const loaders_1 = __importDefault(require("./loaders"));
exports.default = async (config) => {
    const app = express_1.default();
    const server = await loaders_1.default(app);
    server.applyMiddleware({
        app,
        path: config.graphqlPath,
        // Health check on /.well-known/apollo/server-health
        onHealthCheck: async () => {
            if (mongoose_1.default.connection.readyState === 1)
                return;
            throw new Error();
        },
    });
    app.listen({ port: config.port }, () => console.log(`🚀 Server ready at http://localhost:${config.port}${config.graphqlPath}`));
};
//# sourceMappingURL=index.js.map