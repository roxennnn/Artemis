"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
const entities_1 = require("../../entities");
// This generates the mongoose model for us
exports.TodoMongooseModel = typegoose_1.getModelForClass(entities_1.Todo);
class TodoModel {
    async getById(_id) {
        // Use mongoose as usual
        return exports.TodoMongooseModel.findById(_id).lean().exec();
    }
    async create(data) {
        const todo = new exports.TodoMongooseModel(data);
        return todo.save();
    }
}
exports.default = TodoModel;
//# sourceMappingURL=model.js.map