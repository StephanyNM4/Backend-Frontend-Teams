//mayuscula con coma
import mongoose  from "mongoose";
import { Grupo, MensajeGrupo } from "./grupos.model";
import { BaseUsuario } from "./usuarios.model";

const schema = new mongoose.Schema<Grupo>({
    id: Number,
    nombreGrupo: String,
    miembros: Array<BaseUsuario>,
    mensajes: Array<MensajeGrupo>,
})

export const GrupoSchema = mongoose.model('grupos', schema);