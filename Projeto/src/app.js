const express = require('express');
const connection = require('./config/connection');
require('dotenv').config();

// 1. IMPORTAR AS ROTAS (Faltava isso!)
const routes = require('./routes/index'); 

const app = express();

app.use(express.json());

// 2. USAR AS ROTAS (E isso!)
app.use(routes);

async function startServer() {
    try {
        await connection.sync({ alter: true });
        console.log('🔥 Tabelas sincronizadas e banco conectado!');

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('X Erro ao iniciar o servidor:', error);
    }
}

startServer();