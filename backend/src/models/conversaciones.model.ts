import mongoose from "mongoose";
import { BaseUsuario } from "./usuarios.model";

export interface Conversacion {
    _id?: mongoose.Types.ObjectId;
    id: number;
    emisor: Array<BaseUsuario>;
    receptor: Array<BaseUsuario>;
    ultimoMensaje: string;
    fechaConversacionn: string;
    mensajes: Array<Mensaje>
}

export interface Mensaje {
        _idEmisor?: mongoose.Types.ObjectId;
        _idReceptor?: mongoose.Types.ObjectId;
        emisor: number;
        receptor: number;
        mensaje: string;
        hora: string; 
}
