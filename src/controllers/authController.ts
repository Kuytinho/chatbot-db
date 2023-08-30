import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
  
    try {
      const user = await prisma.user.findUnique({
        where: { username: username },
      });
  
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
        
      return res.json({ message: "Login bem-sucedido" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
};
  