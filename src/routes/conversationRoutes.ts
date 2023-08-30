import express from 'express';
import { listConversations, createConversation } from '../controllers/conversationController';

const conversationRouter = express.Router();

// Rota para listar todas as conversas
conversationRouter.get('/conversations', listConversations);

// Rota para criar uma nova conversa
conversationRouter.post('/conversations', createConversation);

export default conversationRouter;