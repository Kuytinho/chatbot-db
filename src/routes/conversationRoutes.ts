import express from 'express';
import { listConversations, createConversation } from '../controllers/conversationController';

const conversationRouter = express.Router();

conversationRouter.get('/conversations', listConversations);

conversationRouter.post('/conversations', createConversation);

export default conversationRouter;