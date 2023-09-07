import { Request, Response } from "express";
import mongoose from "mongoose";
import { ConversacionSchema } from "../models/conversaciones.schema";

export const obtenerMensajeConversacion = (req:Request, res:Response) => {
    ConversacionSchema.findOne({_id: new mongoose.Types.ObjectId(req.params.id)},{mensajes: true})
    .then(resultado=>{
        res.send(resultado);
        res.end();
    })
    .catch(error=>{
        res.send({status: false, message: 'mensajes conversacion no encontrada', error});
        res.end();
    })
}


//Nuevo mensaje para usuario particular y para grupo
export const agregarMensajeParticular = (req:Request, res:Response) => {
    ConversacionSchema.updateOne({_id: new mongoose.Types.ObjectId(req.params.id)},{  
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
    }
    ).then((result)=>{
        res.send(result);
        res.end();
    }).catch((error)=>{
        res.send({status: false, message: 'Mensaje particular agregado con exito', error});
        res.end();
    });
}
