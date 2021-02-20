"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../../config");
// Close the Mongoose default connection is the event of application termination
process.on('SIGINT', async () => {
    await mongoose_1.default.connection.close();
    process.exit(0);
});
exports.mongoDBConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
// Your Mongoose setup goes here
exports.default = async () => mongoose_1.default.connect(config_1.config.mongoDB.uri, exports.mongoDBConfig);
//# sourceMappingURL=mongoose.js.map