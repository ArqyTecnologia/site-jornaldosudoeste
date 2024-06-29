"use strict";



module.exports = (sequelize: any, Datatype: any) => {
    const {Model} = require("sequelize");
    class Noticias extends Model{}

    Noticias.init({
        autor: Datatype.STRING,
        titulo: Datatype.STRING,
        subtitulo: Datatype.STRING,
        data: Datatype.STRING,
        imagem: Datatype.STRING,
        autor_imagem: Datatype.STRING,
        exibir: Datatype.STRING,
        texto: Datatype.STRING,
        data_hora: Datatype.STRING,
        
    },
    {
        sequelize,
        modelName: "tb_postagens_noticias",
        timestamps: false
    });
    
    return Noticias;
}