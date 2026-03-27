const { DataTypes } = require('sequelize');
const connection = require('../config/connection'); // Vamos criar este arquivo já já

const User = connection.define('User', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true // Cria created_at e updated_at
});

module.exports = User;