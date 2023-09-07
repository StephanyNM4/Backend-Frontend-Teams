"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarMensajeParticular = exports.obtenerMensajeConversacion = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const conversaciones_schema_1 = require("../models/conversaciones.schema");
const obtenerMensajeConversacion = (req, res) => {
    conversaciones_schema_1.ConversacionSchema.findOne({ _id: new mongoose_1.default.Types.ObjectId(req.params.id) }, { mensajes: true })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: 'mensajes conversacion no encontrada', error });
        res.end();
    });
};
exports.obtenerMensajeConversacion = obtenerMensajeConversacion;
//Nuevo mensaje para usuario particular y para grupo
const agregarMensajeParticular = (req, res) => {
    conversaciones_schema_1.ConversacionSchema.updateOne({ _id: new mongoose_1.default.Types.ObjectId(req.params.id) }, {
        $push: {
            mensajes: {
                _idEmisor: req.body._idEmisor,
                _idReceptor: req.body._idReceptor,
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
        res.send({ status: false, message: 'Mensaje particular agregado con exito', error });
        res.end();
    });
};
exports.agregarMensajeParticular = agregarMensajeParticular;
