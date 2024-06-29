"use strict";



module.exports = (sequelize: any, Datatype: any) => {
    const {Model} = require("sequelize");
    class Edicoes_diarias extends Model{}

    Edicoes_diarias.init({
        titulo: Datatype.STRING,
        imagem: Datatype.STRING,
        data: Datatype.STRING,
        pdf: Datatype.STRING,
        nome_edital: Datatype.STRING,
        exibir: Datatype.STRING,
        data_hora: Datatype.STRING
    },
    {
        sequelize,
        modelName: "tb_postagens_edicoes_diarias",
        timestamps: false
    });
    return Edicoes_diarias;
}