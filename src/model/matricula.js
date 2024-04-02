const Sequelize = require('sequelize');
const database = require('../config/db');

const pessoa = require('./pessoa');
const curso = require('./curso');
const turma = require('./turma');


const matricula = database.define('Matricula', {
    IDMatricula:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

matricula.belongsTo(pessoa, {
    constraint: true, 
    foreignKey: 'IDPessoa'
});
matricula.belongsTo(curso, {
    constraint: true, 
    foreignKey: 'IDCurso'
});
matricula.belongsTo(turma, {
    constraint: true, 
    foreignKey: 'IDTurma'
});

module.exports = matricula;