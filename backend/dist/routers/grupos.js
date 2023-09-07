"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const grupos_controller_1 = require("../controllers/grupos.controller");
const router = (0, express_1.default)();
// (collection grupos) Obtener mensajes por grupo
//http://localhost:3000/grupos/:id/mensajes
router.get('/:id/mensajes', grupos_controller_1.obtenerMensajesGrupo);
// (collection grupos) Obtener miembros de un grupo
//http://localhost:3000/grupos/1/miembros
router.get('/:id/miembros', grupos_controller_1.obtenerMiembroGrupo);
// (collection grupos) agregar miembro grupo (no es necesaria implementarla en el frontend)
//localhost:3000/grupos/:id/agregar-miembro
router.post('/:id/agregar-miembro', grupos_controller_1.agregarMiembroGrupo);
exports.default = router;
