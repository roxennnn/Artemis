"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// loaders
const apollo_1 = __importDefault(require("./apollo"));
const express_1 = __importDefault(require("./express"));
const mongoose_1 = __importDefault(require("./mongoose"));
exports.default = async (app) => {
    // Load everything related to express
    await express_1.default(app);
    // Connect to mongoose
    await mongoose_1.default();
    // load apollo server config
    return apollo_1.default();
};
//# sourceMappingURL=index.js.map