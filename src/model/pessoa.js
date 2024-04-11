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
    Sexo: {
        type: Sequelize.STRING(30),
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
        type: Sequelize.INTEGER,
        allowNull: false 
    },
    Senha: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Email:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    Telefone:{
        type: Sequelize.STRING(20),
        allowNull: true
    },
    CEP:{
        type: Sequelize.STRING(15),
        allowNull: false
    },
    Cidade:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Estado:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Bairro:{
        type: Sequelize.STRING(30),
        allowNull: false
    },
    Rua:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    Numero:{
        type: Sequelize.STRING(10),
        allowNull: false
    },
    Complemento:{
        type: Sequelize.STRING(50),
        allowNull: true
    },
    Mae:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    Pai:{
        type: Sequelize.STRING(100),
        allowNull: false
    }
});

module.exports = pessoa;
