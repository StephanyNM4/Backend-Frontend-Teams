import mongoose from "mongoose";

export interface Llamada {
    _id?: mongoose.Types.ObjectId;
    id: number;
    _idUsuario?: mongoose.Types.ObjectId;
    nombre: string;
    imagen: string;
    flecha: boolean;
    duarion: string;
    hora: string;
}