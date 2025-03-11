"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const todo_routes_1 = __importDefault(require("./routes/todo.routes"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use((error, req, res, next) => {
    console.error(error.message);
    res.status(500).json('Error del servidor');
});
app.listen(port, () => {
    console.log(`Server running and listen in port: ${port}`);
});
app.use('/todos', todo_routes_1.default);
