// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');

const materia = require('./materia');

// Criando a tabela Sala
const avaliacao = database.define('Avaliacao', {
    IDAvaliacao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nota: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    Data: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

avaliacao.belongsTo(materia, {
    constraint: true,
    foreignKey: 'IDMateria'
});

// Exportando essa tabela
module.exports = avaliacao;