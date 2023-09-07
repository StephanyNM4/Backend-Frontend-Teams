import mongoose from "mongoose";


export class Database {
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect('mongodb+srv://tommy:tommy1234@cluster0.16fxq5a.mongodb.net/teams')
        .then(respuesta=>{
            console.log("Conectado a base de datos examen teams");
        })
        .catch(error=>{
            console.log(error);
        })
    }
}