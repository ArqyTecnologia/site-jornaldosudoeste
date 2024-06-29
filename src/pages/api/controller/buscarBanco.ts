import type { NextApiRequest, NextApiResponse } from "next";
const { Sequelize } = require("sequelize");
const { Op } = Sequelize;

const Camaras = require("../model/camaras");
const Colunistas = require("../model/colunistas");
const Edicoes_diarias = require("../model/edicoes_diarias");
const Edicoes_semanais = require("../model/edicoes_semanais");
const Edicoes_quinzenais = require("../model/edicoes_quinzenais");
const Noticias = require("../model/noticias");
const Prefeituras = require("../model/prefeituras");
const Publicidades = require("../model/publicidades");
const Sindicatos = require("../model/sindicatos");


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT
    })
    
    let dados;
    switch(req.body.busca){
        case 'camaras':
            dados = await Camaras(sequelize, Sequelize.DataTypes).findAll(
                {where: {exibir: {[Op.not]: "Não"}}});
            break;
        case 'colunistas':
            dados = await Colunistas(sequelize, Sequelize.DataTypes).findAll(
                {where: {exibir: {[Op.not]: "Não"}}});
            break;
        case 'edicoes_diarias':
            dados = await Edicoes_diarias(sequelize, Sequelize.DataTypes).findAll(
                {where: {exibir: {[Op.not]: "Não"}}});
            break;
        case 'edicoes_semanais':
            dados = await Edicoes_semanais(sequelize, Sequelize.DataTypes).findAll(
                {where: {exibir: {[Op.not]: "Não"}}});
            break;
        case 'edicoes_quinzenais':
            dados = await Edicoes_quinzenais(sequelize, Sequelize.DataTypes).findAll(
                {where: {exibir: {[Op.not]: "Não"}}});
            break;
        case 'noticias':
            dados = await Noticias(sequelize, Sequelize.DataTypes).findAll(
                {where: {exibir: {[Op.not]: "Não"}}});
            break;
        case 'prefeituras':
            dados = await Prefeituras(sequelize, Sequelize.DataTypes).findAll(
                {where: {exibir: {[Op.not]: "Não"}}});
            break;
        case 'publicidades':
            dados = await Publicidades(sequelize, Sequelize.DataTypes).findAll(
                {where: {exibir: {[Op.not]: "Não"}}});
            break;
        case 'sindicatos':
            dados = await Sindicatos(sequelize, Sequelize.DataTypes).findAll(
                {where: {exibir: {[Op.not]: "Não"}}});
            break;
        default:
            dados = ("Erro na digitação do indicador de busca!");
            break;
    }
    
    
    res.status(200).send(dados);
};