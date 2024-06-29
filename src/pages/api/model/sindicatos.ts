"use strict";



module.exports = (sequelize: any, Datatype: any) => {
    const {Model} = require("sequelize");
    class Sindicatos extends Model{}

    Sindicatos.init({
        imagem: Datatype.STRING,
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
        modelName: "tb_postagens_sindicatos",
        timestamps: false
    });
    return Sindicatos;
}