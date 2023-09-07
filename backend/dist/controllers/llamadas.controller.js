"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerLlamadas = void 0;
const llamadas_schema_1 = require("../models/llamadas.schema");
const obtenerLlamadas = (req, res) => {
    llamadas_schema_1.LlamadaSchema.find()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: 'Llamadas no encontradas', error });
        res.end();
    });
};
exports.obtenerLlamadas = obtenerLlamadas;
