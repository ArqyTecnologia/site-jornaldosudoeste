import type { NextApiRequest, NextApiResponse } from "next";
const { Sequelize } = require("sequelize");

const Comentario = require("../model/comentarios");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    });
    
    const comentario = await Comentario(sequelize, Sequelize.DataTypes).create({
        id: req.body.idReal,
        noticia: req.body.id,
        nome: req.body.nome,
        data: req.body.data,
        texto: req.body.texto,
        email: req.body.email
    });
    
    res.status(200).send(comentario);
};