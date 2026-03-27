const { DataTypes } = require('sequelize');
const connection = require('../config/connection');

const Product = connection.define('Product', {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    description: { type: DataTypes.TEXT },
    stock: { type: DataTypes.INTEGER, defaultValue: 0 }
});

module.exports = Product;