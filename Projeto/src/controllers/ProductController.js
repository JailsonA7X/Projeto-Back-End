const Product = require('../models/Product');

const ProductController = {
    // Criar (Você já tem esse)
    async create(req, res) {
        try {
            const product = await Product.create(req.body);
            return res.status(201).json(product);
        } catch (error) {
            return res.status(400).json({ error: 'Erro ao criar produto' });
        }
    },

    // Listar todos
    async list(req, res) {
        try {
            const products = await Product.findAll();
            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },

    // Atualizar
    async update(req, res) {
        try {
            const { id } = req.params;
            const [updated] = await Product.update(req.body, { where: { id } });
            if (updated) {
                const updatedProduct = await Product.findByPk(id);
                return res.status(200).json(updatedProduct);
            }
            return res.status(404).json({ error: 'Produto não encontrado' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar produto' });
        }
    },

    // Deletar
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await Product.destroy({ where: { id } });
            if (deleted) {
                return res.status(204).send(); // Sucesso sem conteúdo
            }
            return res.status(404).json({ error: 'Produto não encontrado' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao deletar produto' });
        }
    }
};

module.exports = ProductController;