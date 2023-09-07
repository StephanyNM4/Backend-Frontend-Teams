"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
// (collection conversaciones) Obtener mensajes de una conversacion
//localhost:3000/conversaciones/1/mensajes
// router.get('/:id/mensajes', obtenerMensajeConversacion);
// (collection conversaciones) Nuevo mensaje para usuario particular (cruce de usuarios con conversaciones)
//http://localhost:3000/mensajes
// router.post('/mensajes', agregarMensajeUsuarioParticular);
// (collection conversaciones) Nuevo mensaje para grupo
//http://localhost:3000/mensajes
// router.post('/login', login);
exports.default = router;
