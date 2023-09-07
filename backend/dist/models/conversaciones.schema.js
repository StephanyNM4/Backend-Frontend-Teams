"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversacionSchema = void 0;
//mayuscula con coma
const mongoose_1 = __importDefault(require("mongoose"));
// import { BasePregunta } from "./preguntas.model";
const schema = new mongoose_1.default.Schema({
    id: Number,
    emisor: (Array),
    receptor: (Array),
    ultimoMensaje: String,
    fechaConversacionn: String,
    mensajes: (Array),
});
exports.ConversacionSchema = mongoose_1.default.model('conversaciones', schema);
