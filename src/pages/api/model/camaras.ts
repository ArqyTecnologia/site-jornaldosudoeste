"use strict";



module.exports = (sequelize: any, Datatype: any) => {
    const {Model} = require("sequelize");
    class Camaras extends Model{}

    Camaras.init({
        id_publicacao: Datatype.STRING,
        imagem: Datatype.STRING,
        estado: Datatype.STRING,
        cidade: Datatype.STRING,
        titulo: Datatype.STRING,
        data: Datatype.STRING,
        pdf: Datatype.STRING,
        nome_edital: Datatype.STRING,
        exibir: Datatype.STRING,
        data_hora: Datatype.STRING
    },
    {
        sequelize,
        modelName: "tb_postagens_camaras",
        timestamps: false
    });
    return Camaras;
}