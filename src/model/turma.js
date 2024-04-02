// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');

// Criando a tabela Sala
const turma = database.define('Turma', {
    IDTurma: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Periodo: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

// Exportando essa tabela
module.exports = turma;