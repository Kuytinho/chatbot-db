// Em controllers/authController.ts

import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
  
    try {
      // Busque o usuário pelo nome de usuário (username)
      const user = await prisma.user.findUnique({
        where: { username: username },
      });
  
      if (!user) {
        // Usuário não encontrado
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
  
      // Verifique a senha usando bcrypt
      const bcrypt = require('bcrypt');
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        // Senha incorreta
        return res.status(401).json({ error: "Senha incorreta" });
      }
  
      // Login bem-sucedido
      return res.json({ message: "Login bem-sucedido" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
};
  