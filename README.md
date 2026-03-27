# Projeto Back-End - API de Produtos

Este projeto é uma API RESTful desenvolvida em Node.js para gerenciamento de produtos, com sistema de autenticação e proteção de rotas.

## 🛠️ Tecnologias Utilizadas
* Node.js & Express
* MySQL (Sequelize)
* Autenticação JWT (JSON Web Token)
* Criptografia de senhas

## 🚀 Como executar o projeto
1. Clone este repositório.
2. Certifique-se de ter o Node.js instalado.
3. No terminal, instale as dependências:
   ```bash
   npm install
Configure suas credenciais de banco de dados no arquivo .env.

Inicie o servidor:

Bash
node Projeto/src/app.js
🔒 Segurança e Autenticação
As rotas de Criar, Editar e Deletar produtos estão protegidas.
Para acessá-las, é necessário:

Criar um usuário (/v1/user).

Realizar o login (/v1/login) para obter o Bearer Token.

Incluir o token no Header de Autorização das requisições.

Desenvolvido por Francisco Jailson de Souza Oliveira - Março de 2026.
