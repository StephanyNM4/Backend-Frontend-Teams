import express from "express";
import { obtenerLlamadas } from "../controllers/llamadas.controller";

const router = express();

// (collection usuarios) login (usuario y password)
//localhost:3000/llamadas/
router.get('/', obtenerLlamadas);

export default router;