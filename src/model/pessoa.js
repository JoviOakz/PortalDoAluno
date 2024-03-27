// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');

// Criando a tabela Sala
const pessoa = database.define('Pessoa', {
    IDPessoa: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    CPF: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    DataNascimento:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    Foto: {
        type: Sequelize.STRING(50),
        allowNull: false 
    },
    Funcionario: {
        type: Sequelize.BOOLEAN,
        allowNull: false 
    }

});

module.exports = pessoa;
