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
        type: Sequelize.STRING(100),
        allowNull: false
    },
    Data: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    Descricao: {
        type: Sequelize.STRING(255),
        allowNull: false
    }
});

materia.belongsTo(pessoa, {
    constraint: true,
    foreignKey: 'IDPessoa'
});

// Exportando essa tabela
module.exports = materia;