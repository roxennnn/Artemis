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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const model_1 = __importDefault(require("./model"));
let TodoService = class TodoService {
    constructor(todoModel) {
        this.todoModel = todoModel;
    }
    async getById(_id) {
        return this.todoModel.getById(_id);
    }
    async addTodo(data) {
        const newTodo = await this.todoModel.create(data);
        // Business logic goes here
        // Example:
        // Trigger push notification, analytics, ...
        return newTodo;
    }
};
TodoService = __decorate([
    typedi_1.Service() // Dependencies injection
    ,
    __metadata("design:paramtypes", [model_1.default])
], TodoService);
exports.default = TodoService;
//# sourceMappingURL=service.js.map