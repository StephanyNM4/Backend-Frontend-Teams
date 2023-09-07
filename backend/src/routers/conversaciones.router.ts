import express from "express";
import { agregarMensajeParticular, obtenerMensajeConversacion } from "../controllers/conversaciones.controller";

const router = express();

//---------------Cambiar URL en frontend
// (collection conversaciones) Obtener mensajes de una conversacion
//localhost:3000/conversaciones/1/mensajes
router.get('/:id/mensajes', obtenerMensajeConversacion);


//---------------Cambiar URL en frontend
// (collection conversaciones) Nuevo mensaje para usuario particular (cruce de usuarios con conversaciones)
//http://localhost:3000/conversaciones/:id/agregar-mensajes
router.post('/:id/agregar-mensajes', agregarMensajeParticular);








export default router;