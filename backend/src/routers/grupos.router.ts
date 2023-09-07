import express from "express";
import { agregarMensajeGrupo, agregarMiembroGrupo, obtenerMensajesGrupo, obtenerMiembroGrupo } from "../controllers/grupos.controller";

const router = express();

// (collection grupos) Obtener mensajes por grupo
//http://localhost:3000/grupos/:id/mensajes
router.get('/:id/mensajes', obtenerMensajesGrupo);

// (collection grupos) Obtener miembros de un grupo
//http://localhost:3000/grupos/1/miembros
router.get('/:id/miembros', obtenerMiembroGrupo);

// (collection grupos) agregar miembro grupo (no es necesaria implementarla en el frontend)
//http://localhost:3000/grupos/:id/agregar-miembro
router.post('/:id/agregar-miembro', agregarMiembroGrupo);

//---------------Cambiar URL en frontend
// (collection conversaciones) Nuevo mensaje para grupo
//http://localhost:3000/grupos/:id/agregar-mensaje
router.post('/:id/agregar-mensaje', agregarMensajeGrupo);

export default router;
