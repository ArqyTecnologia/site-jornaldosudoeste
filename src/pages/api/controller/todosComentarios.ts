import type { NextApiRequest, NextApiResponse } from "next";
const { Sequelize } = require("sequelize");

const Comentarios = require("../model/comentarios"); // Testar

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT
    })
    
    let dados = await Comentarios(sequelize, Sequelize.DataTypes).findAll();
    
    res.status(200).send(dados);
};