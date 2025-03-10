"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.listen(port, () => {
    console.log(`Server running and listen in port: ${port}`);
});
let todos = [
    {
        userId: 3,
        id: 1,
        title: 'Aprendiento rest api',
        completed: false
    },
    {
        userId: 4,
        id: 2,
        title: 'TypeScripts con express',
        completed: true
    },
];
// Routers
app.get('/todos', (req, res) => {
    res.json(todos);
});
