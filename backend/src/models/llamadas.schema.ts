//mayuscula con coma
import mongoose  from "mongoose";
import { Llamada } from "./llamadas.model";

const schema = new mongoose.Schema<Llamada>({
    id: Number,
    nombre: String,
    imagen: String,
    flecha: Boolean,
    duarion: String,
    hora: String
})

export const LlamadaSchema = mongoose.model('llamadas', schema);