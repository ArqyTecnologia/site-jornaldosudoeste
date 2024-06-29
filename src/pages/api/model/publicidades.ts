"use strict";



module.exports = (sequelize: any, Datatype: any) => {
    const {Model} = require("sequelize");
    class Publicidades extends Model{}

    Publicidades.init({
        nome_publicidade: Datatype.STRING,
        imagem: Datatype.STRING,
        link: Datatype.STRING,
        data_inicio: Datatype.STRING,
        data_final: Datatype.STRING,
        exibir: Datatype.STRING,
        data_hora: Datatype.STRING
    },
    {
        sequelize,
        modelName: "tb_postagens_publicidades",
        timestamps: false
    });
    return Publicidades;
}