const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AuthController = {
    async login(req, res) {
        try {
            const { email, password } = req.body;

            // 1. Verificar se o usuário existe
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(401).json({ error: 'Usuário não encontrado' });
            }

            // 2. Verificar se a senha está correta
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Senha inválida' });
            }

            // 3. Gerar o Token JWT (Validade de 1 dia)
            const token = jwt.sign(
                { id: user.id, email: user.email },
                'SUA_CHAVE_SECRETA_AQUI', // No futuro, use o .env para isso
                { expiresIn: '1d' }
            );

            return res.status(200).json({
                message: 'Login realizado com sucesso!',
                token: token
            });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao processar login' });
        }
    }
};

module.exports = AuthController;