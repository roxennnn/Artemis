"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
const mongodb_1 = require("mongodb");
const type_graphql_1 = require("type-graphql");
let Todo = class Todo {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", mongodb_1.ObjectId)
], Todo.prototype, "_id", void 0);
__decorate([
    typegoose_1.prop(),
    type_graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], Todo.prototype, "createdAt", void 0);
__decorate([
    typegoose_1.prop(),
    type_graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], Todo.prototype, "updatedAt", void 0);
__decorate([
    typegoose_1.prop(),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Todo.prototype, "content", void 0);
__decorate([
    typegoose_1.prop({ default: false }),
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], Todo.prototype, "isDone", void 0);
Todo = __decorate([
    type_graphql_1.ObjectType()
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map