"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const config_1 = require("../../config");
exports.default = async (app) => {
    // Body parser only needed during POST on the graphQL path
    app.use(config_1.config.graphqlPath, body_parser_1.default.json());
    // Cors configuration
    app.use(cors_1.default());
    // Sets various HTTP headers to help protect our app
    app.use(helmet_1.default());
};
//# sourceMappingURL=express.js.map