const matricula = require('../model/matricula');
const curso = require('../model/curso');
const turma = require('../model/turma');
const materia = require('../model/materia');
const pessoa = require('../model/pessoa');

// const url = require('url');

// const urlString = process.argv[3];

// // Supondo que você esteja executando isso em um servidor HTTP do Node.js
// // req é o objeto de solicitação HTTP
// const { query } = url.parse(urlString, true);

// // Obtendo valores específicos dos parâmetros
// const idPessoa = query.idPessoa;
// const selecionadoMM = query.selecionado;
// const funcionario = query.funcionario;



module.exports = {
    
    async dados(req, res) {
        const idPessoa = req.query.idPessoa;
        const selecionadoMM = req.query.selecionado;
        const funcionario = req.query.funcionario;

        const encontrarPessoa = await pessoa.findOne({
            raw: true,
            attributes: ['IDPessoa', 'Nome'],
            where: { IDPessoa: idPessoa }
        });
        if (funcionario == 0) {
            const encontrarMatricula = await matricula.findOne({
                raw: true,
                attributes: ['IDMatricula', 'IDCurso', 'IDTurma'],
                where: { IDMatricula: selecionadoMM }
            });

            let idCurso = encontrarMatricula.IDCurso;

            const cursoEncontrado = await curso.findOne({
                raw: true,
                attributes: ['Nome'],
                where: { IDCurso: idCurso }
            });

            res.render('../views/news', { encontrarPessoa, encontrarMatricula, cursoEncontrado });
        }
    }
}