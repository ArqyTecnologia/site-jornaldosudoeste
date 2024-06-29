"use strict";

module.exports = (sequelize: any, Datatype: any) => {
    const {Model} = require("sequelize");
    class Publicacoes extends Model{}

    Publicacoes.init({
        nome: Datatype.STRING,
        email: Datatype.STRING,
        segmento: Datatype.STRING,
        observacoes: Datatype.STRING,
        arquivo: Datatype.BLOB('long')
    },
    {
        sequelize,
        modelName: "envio_publicacoeslegais", // lembrar de trocar nome p/ envio_publicacoeslegais
        timestamps: false
    });

    return Publicacoes;
}