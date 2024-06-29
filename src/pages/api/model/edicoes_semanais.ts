"use strict";



module.exports = (sequelize: any, Datatype: any) => {
    const {Model} = require("sequelize");
    class Edicoes_semanais extends Model{}

    Edicoes_semanais.init({
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
        modelName: "tb_postagens_edicoes_semanais",
        timestamps: false
    });
    return Edicoes_semanais;
}