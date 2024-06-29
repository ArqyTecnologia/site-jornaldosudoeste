"use strict";



module.exports = (sequelize: any, Datatype: any) => {
    const {Model} = require("sequelize");
    class Colunistas extends Model{}

    Colunistas.init({
        id_publicacao: Datatype.STRING,
        nome: Datatype.STRING,
        data: Datatype.STRING,
        imagem: Datatype.STRING,
        exibir: Datatype.STRING,
        descricao: Datatype.STRING,
        titulo: Datatype.STRING,
        texto: Datatype.STRING,
        data_hora: Datatype.STRING
    },
    {
        sequelize,
        modelName: "tb_postagens_colunistas",
        timestamps: false
    });
    return Colunistas;
}