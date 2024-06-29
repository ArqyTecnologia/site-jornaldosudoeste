import type { NextApiRequest, NextApiResponse } from "next";
import { Sequelize } from "sequelize";
import Email from "../model/email";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: "Método não permitido" });
        return;
    }

    console.log('Conectando ao banco de dados...');
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: console.log  // Adicionando logging
    });

    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados foi estabelecida com sucesso.');

        console.log('Dados recebidos:', req.body);

        const email = await Email(sequelize, Sequelize.DataTypes).create({
            email: req.body.email
        });

        console.log('Email salvo no banco de dados:', email);
        res.status(200).send(email);
    } catch (error) {
        console.error('Erro ao salvar o email:', error);
        res.status(500).json({ error: 'Erro ao salvar o email' });
    } finally {
        await sequelize.close();
        console.log('Conexão com o banco de dados fechada.');
    }
};
