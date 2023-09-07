import express from "express";
import { agregarIdMongoListaConversaciones, login, obtenerListaConversaciones, obtenerUsuario, obtenerUsuarios } from "../controllers/usuarios.controller";

const router = express();

//---------------Cambiar URL en frontend
// (collection usuarios) login (usuario y password)
//localhost:3000/usuarios/login
router.post('/login', login);

// (collection usuarios) obtener usuarios
//http://localhost:3000/usuarios
router.get('/', obtenerUsuarios);

//(collection usuarios) Obtener un usuario
//localhost:3000/usuarios/:id
router.get('/:id', obtenerUsuario);

// (collection conversaciones) obtener lista de conversaciones
//localhost:3000/usuarios/1/conversaciones
router.get('/:id/conversaciones', obtenerListaConversaciones);

// (collection conversaciones) Nuevo mensaje para usuario particular (cruce de usuarios con conversaciones)
//http://localhost:3000/usuarios/:id-user/conversaciones/:id-number
router.post('/:id/conversaciones/:idNumber', agregarIdMongoListaConversaciones);

export default router;
