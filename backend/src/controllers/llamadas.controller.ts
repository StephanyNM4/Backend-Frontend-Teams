import { Request, Response } from "express";
import mongoose from "mongoose";
import { LlamadaSchema } from "../models/llamadas.schema";


export const obtenerLlamadas = (req:Request, res:Response) => {
    LlamadaSchema.find()
    .then(resultado=>{
        res.send(resultado);
        res.end();
    })
    .catch(error=>{
        res.send({status: false, message: 'Llamadas no encontradas', error});
        res.end();
    })
}