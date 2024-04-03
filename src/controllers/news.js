const matricula = require('../model/matricula');
const curso = require('../model/curso');
const turma = require('../model/turma');
const materia = require('../model/materia');
const pessoa = require('../model/pessoa');


module.exports = {

    async dados(req, res) {
        const idPessoa = req.query.idPessoa;
        const selecionadoMM = req.query.selecionado;
        const funcionario = req.query.funcionario;

        
    },
}