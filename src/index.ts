import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRoutes';
import conversationRouter from './routes/conversationRoutes'; 

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'lucasfullstacktest.up.railway.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

app.use('/auth', authRouter);
app.use('/api', conversationRouter);

app.get('/', (req, res) => {
  res.send(
    `
    <h1>Login chatbot API</h1>
    <h2>Available Routes</h2>
    <pre>
      POST /auth/login
      GET /api/conversations     // Para listar todas as conversas
      POST /api/conversations    // Para criar uma nova conversa
    </pre>
    `.trim()
  );
});

app.listen(Number(port), '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
