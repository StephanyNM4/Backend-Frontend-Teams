"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarIdMongoListaConversaciones = exports.obtenerListaConversaciones = exports.obtenerUsuario = exports.obtenerUsuarios = exports.login = void 0;
const usuarios_schema_1 = require("../models/usuarios.schema");
const mongoose_1 = __importDefault(require("mongoose"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuarios_schema_1.UsuarioSchema.findOne({ nombre: req.body.nombre, contrasena: req.body.contrasena }, { contrasena: false });
    console.log(req.body.nombre);
    console.log(req.body.contrasena);
    if (usuario) {
        res.send(usuario);
        res.end();
    }
    else
        res.send(false);
    res.end();
});
exports.login = login;
//Obtener todos los usuarios
const obtenerUsuarios = (req, res) => {
    usuarios_schema_1.UsuarioSchema.find()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: 'Usuarios no encontrados', error });
        res.end();
    });
};
exports.obtenerUsuarios = obtenerUsuarios;
const obtenerUsuario = (req, res) => {
    usuarios_schema_1.UsuarioSchema.findOne({ _id: new mongoose_1.default.Types.ObjectId(req.params.id) })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: 'Usuario no encontrado', error });
        res.end();
    });
};
exports.obtenerUsuario = obtenerUsuario;
const obtenerListaConversaciones = (req, res) => {
    usuarios_schema_1.UsuarioSchema.findOne({ _id: new mongoose_1.default.Types.ObjectId(req.params.id) }, { conversaciones: true })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: 'Lista de conversaciones no encontrada', error });
        res.end();
    });
};
exports.obtenerListaConversaciones = obtenerListaConversaciones;
const agregarIdMongoListaConversaciones = (req, res) => {
    console.log(req.params.id, req.params.idNumber);
    usuarios_schema_1.UsuarioSchema.updateOne({ _id: new mongoose_1.default.Types.ObjectId(req.params.id) }, {
        $push: {
            conversaciones: {
                _idConversacion: new mongoose_1.default.Types.ObjectId(req.body._idConversacion),
                _idDestinatario: new mongoose_1.default.Types.ObjectId(req.body._idDestinatario),
                _idGrupo: new mongoose_1.default.Types.ObjectId(req.body._idGrupo),
                idConversacion: req.body.idConversacion,
                idDestinatario: req.body.idDestinatario,
                idGrupo: req.body.idGrupo,
                tipo: req.body.tipo,
                ultimoMensaje: req.body.ultimoMensaje,
                horaUltimoMensaje: req.body.horaUltimoMensaje,
                nombreDestinatario: req.body.nombreDestinatario,
                imagenDestinatario: req.body.imagenDestinatario
            }
        }
    }).then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.agregarIdMongoListaConversaciones = agregarIdMongoListaConversaciones;
