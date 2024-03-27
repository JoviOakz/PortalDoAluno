// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');

const pessoa = require('./pessoa');

// Criando a tabela Sala
const materia = database.define('Materia', {
    IDMateria: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Data: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

materia.belongsTo(pessoa, {
    constraint: true,
    foreignKey: 'IDPessoa'
});

// Exportando essa tabela
module.exports = materia;