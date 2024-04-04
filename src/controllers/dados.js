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
        const pagina = req.query.pagina;

        const encontrarPessoa = await pessoa.findOne({
            raw: true,
            attributes: ['IDPessoa', 'Nome', 'CPF', 'DataNascimento', 'Foto', 'Funcionario', 'Senha', 'Email', 'Telefone', 'CEP', 'Cidade', 'Estado', 'Rua', 'Numero', 'Complemento', 'Mae', 'Pai'],
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
                attributes: ['IdCurso', 'Nome', 'HorasComplementares'],
                where: { IDCurso: idCurso }
            });

            res.render(`../views/${pagina}`, { encontrarPessoa, encontrarMatricula, cursoEncontrado, idPessoa, selecionadoMM, funcionario });
        } else if (funcionario == 1) {
            const encontrarMateria = await materia.findOne({
                raw: true,
                attributes: ['IDMateria', 'Nome', 'Data', 'Descricao'],
                where: { IDMateria: selecionadoMM }
            });

            res.render(`../views/${pagina}`, { encontrarPessoa, encontrarMateria, idPessoa, selecionadoMM, funcionario });
        }
    }
}