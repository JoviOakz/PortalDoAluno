// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');

const materia = require('./materia');

// Criando a tabela Sala
const chamada = database.define('Chamada', {
    IDChamada: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Presenca: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    HorasComplementares: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

chamada.belongsTo(materia, {
    constraint: true,
    foreignKey: 'IDMateria'
});

// Exportando essa tabela
module.exports = chamada;