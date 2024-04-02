const Sequelize = require('sequelize');
const database = require('../config/db');

const materia = require('./curso');
const turma = require('./turma');


const grade = database.define('Grade', {
    IDGrade:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

matricula.belongsTo(materia, {
    constraint: true, 
    foreignKey: 'IDCurso'
});
matricula.belongsTo(turma, {
    constraint: true, 
    foreignKey: 'IDTurma'
});

module.exports = grade;