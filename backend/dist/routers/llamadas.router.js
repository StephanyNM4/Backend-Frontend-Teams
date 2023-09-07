"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const llamadas_controller_1 = require("../controllers/llamadas.controller");
const router = (0, express_1.default)();
// (collection usuarios) login (usuario y password)
//localhost:3000/llamadas/
router.get('/', llamadas_controller_1.obtenerLlamadas);
exports.default = router;
