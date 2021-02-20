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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const mongodb_1 = require("mongodb");
const entities_1 = require("../../entities");
const service_1 = __importDefault(require("./service"));
const input_1 = require("./input");
/*
  IMPORTANT: Your business logic must be in the service!
*/
let TodoResolver = class TodoResolver {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async getTodo(id) {
        const todo = await this.todoService.getById(id);
        return todo;
    }
    async createTodo(createTodoData) {
        const todo = await this.todoService.addTodo(createTodoData);
        return todo;
    }
};
__decorate([
    type_graphql_1.Query((returns) => entities_1.Todo),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongodb_1.ObjectId]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "getTodo", null);
__decorate([
    type_graphql_1.Mutation((returns) => entities_1.Todo),
    __param(0, type_graphql_1.Arg("createTodoData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_1.NewTodoInput]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "createTodo", null);
TodoResolver = __decorate([
    typedi_1.Service() // Dependencies injection
    ,
    type_graphql_1.Resolver((of) => entities_1.Todo),
    __metadata("design:paramtypes", [service_1.default])
], TodoResolver);
exports.default = TodoResolver;
//# sourceMappingURL=resolver.js.map