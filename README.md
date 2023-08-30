# Backend do Chatbot Application

Este é o backend de uma aplicação de chatbot desenvolvida para interagir com os usuários, fornecendo respostas automáticas a perguntas comuns. Ele inclui recursos de autenticação de usuário, opções de empréstimo e exportação de conversas em formato CSV.

## Descrição

O backend é responsável pela autenticação de usuário e armazenamento de conversas em um banco de dados.

## Funcionalidades

- **Autenticação de Usuário**: Os usuários podem fazer login fornecendo um nome de usuário e senha válidos.
- **Armazenamento de Conversas**: As conversas dos usuários são armazenadas em um banco de dados.

## Configuração

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório raiz do projeto.
3. Execute `npm install` para instalar as dependências.
4. Configure as variáveis de ambiente necessárias, como `DATABASE_URL`
5. Após a configuração, execute `npm run dev` para iniciar o servidor backend.
6. O servidor estará acessível em `http://localhost:3002`.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Banco de Dados (PostgreSQL)

## Banco de Dados

Tabela User: Onde é salvo o usuario e a senha.
Tabela Conversation: Onde são salvas as conversas.

## Contribuindo

Explique como outros desenvolvedores podem contribuir para o desenvolvimento do backend. Isso pode incluir instruções sobre como criar pull requests, relatar problemas e seguir as diretrizes de estilo de código.

## Autor

Lucas Carvalho de Medeiros
