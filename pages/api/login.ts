// pages/api/login.js
import { connectToDatabase } from "../../util/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

let client: MongoClient | undefined;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    
    try {
      const { db, client } = await connectToDatabase(); // Conecta ao banco de dados

      // Realize as operações de autenticação no banco de dados
      const user = await db.collection("users").findOne({ user: username });

      if (!user) {
        return res.status(401).json({ message: "Usuário não encontrado" });
      }

      if (user.pass === password) {
        return res.status(200).json({ message: "Autenticação bem-sucedida" });
      } else {
        return res.status(401).json({ message: "Senha incorreta" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Erro na autenticação" });
    } finally {
      if (client) {
        client.close(); // Certifique-se de fechar a conexão com o banco de dados
      }
    }
  } else {
    return res.status(405).end(); // Método não permitido
  }
};
