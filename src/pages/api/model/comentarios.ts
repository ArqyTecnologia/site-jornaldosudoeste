"use strict";

module.exports = (sequelize: any, Datatype: any) => {
    const {Model} = require("sequelize");
    const Noticias = require("./noticias");
    class Comentarios extends Model{}
    
    Comentarios.init({
        noticia: Datatype.STRING,
        nome: Datatype.STRING,
        data: Datatype.STRING,
        texto: Datatype.STRING,
        email: Datatype.STRING
    },
    {
        sequelize,
        modelName: "comentarios",
        timestamps: false
    });
    
    return Comentarios;
}