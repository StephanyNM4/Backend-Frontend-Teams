import { Request, Response } from "express";
import mongoose from "mongoose";
import { GrupoSchema } from "../models/grupos.schema";


export const obtenerMensajesGrupo = (req:Request, res:Response) => {
    GrupoSchema.findOne({_id: new mongoose.Types.ObjectId(req.params.id)})
    .then(resultado=>{
        res.send(resultado);
        res.end();
    })
    .catch(error=>{
        res.send({status: false, message: 'Mendajes de grupo no encontrados', error});
        res.end();
    })
}

export const obtenerMiembroGrupo = (req:Request, res:Response) => {
    GrupoSchema.findOne({_id: new mongoose.Types.ObjectId(req.params.id)},{miembros:true})
    .then(resultado=>{
        res.send(resultado);
        res.end();
    })
    .catch(error=>{
        res.send({status: false, message: 'Miembro de grupo no encontrado', error});
        res.end();
    })
}

export const agregarMiembroGrupo = (req:Request, res:Response) => {
    GrupoSchema.updateOne({_id: new mongoose.Types.ObjectId(req.params.id)},{  
        $push: {
            miembros: {
            _id: req.body._id,
            id: req.body.id,
            nombre: req.body.nombre,
            imagen: req.body.imagen
            }
        }
    }
    ).then((result)=>{
        res.send(result);
        res.end();
    }).catch((error)=>{
        res.send({status: false, message: 'Miembro no agregado', error});
        res.end();
    });
}

export const agregarMensajeGrupo = (req:Request, res:Response) => {
    GrupoSchema.updateOne({_id: new mongoose.Types.ObjectId(req.params.id)},{  
        $push: {
            mensajes: {
                _idEmisor: req.body._idEmisor,
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
        res.send({status: false, message: 'Mensaje grupal no agregado', error});
        res.end();
    });
}