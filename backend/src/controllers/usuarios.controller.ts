import { Request, Response } from "express";
import {UsuarioSchema} from '../models/usuarios.schema';
import mongoose from "mongoose";

export const login = async (req:Request, res:Response) => {
    const usuario = await UsuarioSchema.findOne({nombre: req.body.nombre, contrasena: req.body.contrasena}, {contrasena: false});
    console.log(req.body.nombre);
    console.log(req.body.contrasena);

    if (usuario) {
        res.send(usuario);
        res.end();
    }
    else 
        res.send(false);
        res.end();
    
}

//Obtener todos los usuarios
export const obtenerUsuarios = (req:Request, res:Response) => {
    UsuarioSchema.find()
    .then(resultado=>{
        res.send(resultado);
        res.end();
    })
    .catch(error=>{
        res.send({status: false, message: 'Usuarios no encontrados', error});
        res.end();
    })
}

export const obtenerUsuario = (req:Request, res:Response) => {
    UsuarioSchema.findOne({_id: new mongoose.Types.ObjectId(req.params.id)})
    .then(resultado=>{
        res.send(resultado);
        res.end();
    })
    .catch(error=>{
        res.send({status: false, message: 'Usuario no encontrado', error});
        res.end();
    })
}

export const obtenerListaConversaciones = (req:Request, res:Response) => {
    UsuarioSchema.findOne({_id: new mongoose.Types.ObjectId(req.params.id)}, {conversaciones:true})
    .then(resultado=>{
        res.send(resultado);
        res.end();
    })
    .catch(error=>{
        res.send({status: false, message: 'Lista de conversaciones no encontrada', error});
        res.end();
    })
}

export const agregarIdMongoListaConversaciones = (req:Request, res:Response) => {
    console.log(req.params.id, req.params.idNumber);
    
    UsuarioSchema.updateOne({_id: new mongoose.Types.ObjectId(req.params.id)},{
        $push: {
            conversaciones: {
                _idConversacion: new mongoose.Types.ObjectId(req.body._idConversacion),
                _idDestinatario: new mongoose.Types.ObjectId(req.body._idDestinatario),
                _idGrupo: new mongoose.Types.ObjectId(req.body._idGrupo),
                idConversacion: req.body.idConversacion,
                idDestinatario: req.body.idDestinatario,
                idGrupo: req.body.idGrupo,
                tipo: req.body.tipo,
                ultimoMensaje:  req.body.ultimoMensaje,
                horaUltimoMensaje: req.body.horaUltimoMensaje,
                nombreDestinatario: req.body.nombreDestinatario,
                imagenDestinatario: req.body.imagenDestinatario
            }
        }
    }
    ).then((result)=>{
        res.send(result);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
}



