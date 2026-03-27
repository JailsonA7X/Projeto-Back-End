const User = require('../models/User');
const bcrypt = require('bcrypt');

const UserController = {
    // Criar Usuário (POST /v1/user)
    create: async (req, res) => {
        try {
            const { firstname, surname, email, password } = req.body;

            // Criptografando a senha (requisito de segurança)
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                firstname,
                surname,
                email,
                password: hashedPassword
            });

            return res.status(201).json({
                id: newUser.id,
                firstname: newUser.firstname,
                surname: newUser.surname,
                email: newUser.email
            });
        } catch (error) {
            return res.status(400).json({ message: "Erro ao criar usuário", error: error.message });
        }
    }
};

module.exports = UserController;