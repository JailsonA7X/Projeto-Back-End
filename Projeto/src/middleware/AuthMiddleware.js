const jwt = require('jsonwebtoken');
const AuthMiddleware = require('../middleware/AuthMiddleware');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    // O header vem no formato: "Bearer TOKEN_AQUI"
    const parts = authHeader.split(' ');
    const [scheme, token] = parts;

    try {
        const decoded = jwt.verify(token, 'SUA_CHAVE_SECRETA_AQUI');
        req.userId = decoded.id;
        return next(); // Pode seguir para o Controller
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido' });
    }
};