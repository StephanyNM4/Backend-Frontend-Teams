"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = (0, express_1.default)();
//---------------Cambiar URL en frontend
// (collection usuarios) login (usuario y password)
//localhost:3000/usuarios/login
router.post('/login', usuarios_controller_1.login);
// (collection usuarios) obtener usuarios
//http://localhost:3000/usuarios
router.get('/', usuarios_controller_1.obtenerUsuarios);
//(collection usuarios) Obtener un usuario
//localhost:3000/usuarios/:id
router.get('/:id', usuarios_controller_1.obtenerUsuario);
// (collection conversaciones) obtener lista de conversaciones
//localhost:3000/usuarios/1/conversaciones
router.get('/:id/conversaciones', usuarios_controller_1.obtenerListaConversaciones);
// (collection conversaciones) Nuevo mensaje para usuario particular (cruce de usuarios con conversaciones)
//http://localhost:3000/usuarios/:id-user/conversaciones/:id-number
router.post('/:id/conversaciones/:idNumber', usuarios_controller_1.agregarIdMongoListaConversaciones);
exports.default = router;
