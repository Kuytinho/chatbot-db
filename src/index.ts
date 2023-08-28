import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from 'cors';

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'lucasfullstacktest.up.railway.app'], // Adicione os URLs do frontend aqui
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Especifique os métodos permitidos
  })
);

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Busque o usuário pelo email
    const user = await prisma.user.findFirst({
      where: { username: username },
    });

    if (!user) {
      // Usuário não encontrado
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    if (user.password !== password) {
      // Senha incorreta
      return res.status(401).json({ error: "Senha incorreta" });
    }

    // Login bem-sucedido
    return res.json({ message: "Login bem-sucedido" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

app.get("/", async (req, res) => {
  res.send(
    `
  <h1>Todo REST API</h1>
  <h2>Available Routes</h2>
  <pre>
    GET, POST /todos
    GET, PUT, DELETE /todos/:id
  </pre>
  `.trim(),
  );
});

app.listen(Number(port), "0.0.0.0", () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
