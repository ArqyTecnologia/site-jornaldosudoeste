import type { NextApiRequest, NextApiResponse } from "next";
const { Sequelize } = require("sequelize");

const Publicacoes = require("../model/publicacoes");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    });
    
    const publicacoes = await Publicacoes(sequelize, Sequelize.DataTypes).create({
        id: req.body.id,
        nome: req.body.nome,
        email: req.body.email,
        segmento: req.body.segmento,
        observacoes: req.body.observacoes,
        arquivo: req.body.arquivo
    });
    
    res.status(200).send(publicacoes);
};