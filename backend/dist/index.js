"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./utils/database");
const usuarios_router_1 = __importDefault(require("./routers/usuarios.router"));
const grupos_router_1 = __importDefault(require("./routers/grupos.router"));
const conversaciones_router_1 = __importDefault(require("./routers/conversaciones.router"));
const llamadas_router_1 = __importDefault(require("./routers/llamadas.router"));
//Stephany Nicole Lopez Matamoros 
//Para levantar backend: Entrar a carpeta backend (cd backend)
//terminal 1: npx tsc --watch
//terminal 2: npx nodemon dist/index.js
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const database = new database_1.Database();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/usuarios', usuarios_router_1.default);
app.use('/conversaciones', conversaciones_router_1.default);
app.use('/grupos', grupos_router_1.default);
app.use('/llamadas', llamadas_router_1.default);
app.get('/', (req, res) => {
    res.send('Servidor examen 2');
});
app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
});
