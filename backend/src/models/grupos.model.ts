import mongoose from "mongoose";
import { BaseUsuario } from "./usuarios.model";

export interface Grupo {
    _id?: mongoose.Types.ObjectId;
    id: number;
    nombreGrupo: string;
    miembros: Array<BaseUsuario>;
    mensajes: Array<MensajeGrupo>;
}

export interface MensajeGrupo {
    _idEmisor?: mongoose.Types.ObjectId;
    emisor: number;
    receptor: null;
    mensaje: string;
    hora: string;
}
