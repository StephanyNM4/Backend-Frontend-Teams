import mongoose from "mongoose";


export interface BaseUsuario {
    _id?: mongoose.Types.ObjectId;
    id: number;
    nombre: string;
    imagen: string;
}

export interface ConversacionUsuario {
    _idConversacion?: mongoose.Types.ObjectId;
    _idDestinatario?: mongoose.Types.ObjectId | null;
    _idGrupo?: mongoose.Types.ObjectId | null;
    idConversacion: number;
    idDestinatario: number | null;
    idGrupo: number | null;
    tipo: string;
    ultimoMensaje: string;
    horaUltimoMensaje: string;
    nombreDestinatario: string;
    imagenDestinatario: string;
}


export interface Usuario extends BaseUsuario{
    contrasena: string;
    status: string;
    conversaciones: Array<ConversacionUsuario>;
}


