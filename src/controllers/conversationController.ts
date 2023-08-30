import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const listConversations = async (req: Request, res: Response) => {
  try {
    const conversations = await prisma.conversation.findMany();
    res.json(conversations);
  } catch (error) {
    console.error('Erro ao listar as conversas:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

export const createConversation = async (req: Request, res: Response) => {
    const { text, sender, timestamp } = req.body;
  
    try {
      const conversation = await prisma.conversation.create({
        data: {
          text,
          sender,
          timestamp,
        },
      });
  
      return res.json(conversation);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  };