//mayuscula con coma
import mongoose  from "mongoose";
import { BaseUsuario} from "./usuarios.model";
import { Conversacion, Mensaje } from "./conversaciones.model";
// import { BasePregunta } from "./preguntas.model";

const schema = new mongoose.Schema<Conversacion>({
    id: Number,
    emisor: Array<BaseUsuario>,
    receptor: Array<BaseUsuario>,
    ultimoMensaje: String,
    fechaConversacionn: String,
    mensajes: Array<Mensaje>,
})

export const ConversacionSchema = mongoose.model('conversaciones', schema);