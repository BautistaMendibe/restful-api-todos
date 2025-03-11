"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const todoRoutes = express_1.default.Router();
const URL_API = (_a = process.env.URL_API) !== null && _a !== void 0 ? _a : '';
todoRoutes.get('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(URL_API);
        const todos = response.data;
        res.send(todos);
    }
    catch (error) {
        console.log(error);
        res.send(500).json(error);
    }
}));
todoRoutes.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    try {
        const response = yield axios_1.default.get(`${URL_API}/${id}`);
        const todo = response.data;
        res.send(todo);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}));
todoRoutes.post('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = req.body;
    try {
        const response = yield axios_1.default.post(URL_API, todo);
        const todoId = response.data;
        res.send(todoId);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}));
todoRoutes.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    try {
        const response = yield axios_1.default.put(`${URL_API}/${id}`);
        const todo = response.data;
        res.send(todo);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}));
todoRoutes.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = +req.params.id;
    try {
        const response = yield axios_1.default.delete(`${URL_API}/${id}`);
        res.send(response.data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}));
exports.default = todoRoutes;
