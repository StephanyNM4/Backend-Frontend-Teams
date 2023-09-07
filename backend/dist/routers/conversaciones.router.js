"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const conversaciones_controller_1 = require("../controllers/conversaciones.controller");
const router = (0, express_1.default)();
//---------------Cambiar URL en frontend
// (collection conversaciones) Obtener mensajes de una conversacion
//localhost:3000/conversaciones/1/mensajes
router.get('/:id/mensajes', conversaciones_controller_1.obtenerMensajeConversacion);
//---------------Cambiar URL en frontend
// (collection conversaciones) Nuevo mensaje para usuario particular (cruce de usuarios con conversaciones)
//http://localhost:3000/conversaciones/:id/agregar-mensajes
router.post('/:id/agregar-mensajes', conversaciones_controller_1.agregarMensajeParticular);
exports.default = router;
