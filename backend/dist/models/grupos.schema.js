"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrupoSchema = void 0;
//mayuscula con coma
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    id: Number,
    nombreGrupo: String,
    miembros: (Array),
    mensajes: (Array),
});
exports.GrupoSchema = mongoose_1.default.model('grupos', schema);
