"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarMensajeGrupo = exports.agregarMiembroGrupo = exports.obtenerMiembroGrupo = exports.obtenerMensajesGrupo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const grupos_schema_1 = require("../models/grupos.schema");
const obtenerMensajesGrupo = (req, res) => {
    grupos_schema_1.GrupoSchema.findOne({ _id: new mongoose_1.default.Types.ObjectId(req.params.id) })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: 'Mendajes de grupo no encontrados', error });
        res.end();
    });
};
exports.obtenerMensajesGrupo = obtenerMensajesGrupo;
const obtenerMiembroGrupo = (req, res) => {
    grupos_schema_1.GrupoSchema.findOne({ _id: new mongoose_1.default.Types.ObjectId(req.params.id) }, { miembros: true })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: 'Miembro de grupo no encontrado', error });
        res.end();
    });
};
exports.obtenerMiembroGrupo = obtenerMiembroGrupo;
const agregarMiembroGrupo = (req, res) => {
    grupos_schema_1.GrupoSchema.updateOne({ _id: new mongoose_1.default.Types.ObjectId(req.params.id) }, {
        $push: {
            miembros: {
                _id: req.body._id,
                id: req.body.id,
                nombre: req.body.nombre,
                imagen: req.body.imagen
            }
        }
    }).then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => {
        res.send({ status: false, message: 'Miembro no agregado', error });
        res.end();
    });
};
exports.agregarMiembroGrupo = agregarMiembroGrupo;
const agregarMensajeGrupo = (req, res) => {
    grupos_schema_1.GrupoSchema.updateOne({ _id: new mongoose_1.default.Types.ObjectId(req.params.id) }, {
        $push: {
            mensajes: {
                _idEmisor: req.body._idEmisor,
                emisor: req.body.emisor,
                receptor: req.body.receptor,
                mensaje: req.body.mensaje,
                hora: req.body.hora
            }
        }
    }).then((result) => {
        res.send(result);
        res.end();
    }).catch((error) => {
        res.send({ status: false, message: 'Mensaje grupal no agregado', error });
        res.end();
    });
};
exports.agregarMensajeGrupo = agregarMensajeGrupo;
