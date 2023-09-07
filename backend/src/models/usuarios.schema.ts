//mayuscula con coma
import mongoose  from "mongoose";
import { ConversacionUsuario, Usuario } from "./usuarios.model";

const schema = new mongoose.Schema<Usuario>({
    id: Number,
    nombre: String,
    imagen: String,
    contrasena: String,
    status: String,
    conversaciones: Array<ConversacionUsuario>,
})

export const UsuarioSchema = mongoose.model('usuarios', schema);