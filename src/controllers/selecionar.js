const matricula = require('../model/matricula');
const curso = require('../model/curso');
const turma = require('../model/turma');
const materia = require('../model/materia');

module.exports = {

    async selecionar(req, res) {
        const id = req.query.idPessoa;
        const nome = req.query.nomePessoa;
        const funcionario = req.query.funcionario;

        console.log(funcionario);
        const matriculasCompletas = [];
        let materiasEncontradas = [];

        if(funcionario == 'true'){

            const materiasEncontradas = await materia.findAll({
            raw: true,
            attributes: ['Nome', 'Data'],
            where: { IDPessoa: id }
            });
            console.log('FUNCIONARIO')
            res.render('../views/selecionar', { pessoaEncontrada:  { IDPessoa: id }, materiasEncontradas, nome, funcionario});

        }
        else{
            
            const matriculasEncontradas = await matricula.findAll({
                raw: true,
                attributes: ['IDCurso', 'IDTurma'],
                where: { IDPessoa: id }
            });

            for (const matricula of matriculasEncontradas) {
                const cursoEncontrado = await curso.findOne({
                    raw: true,
                    attributes: ['Nome'],
                    where: { IDCurso: matricula.IDCurso }
                });

                const turmaEncontrada = await turma.findOne({
                    raw: true,
                    attributes: ['Periodo'],
                    where: { IDTurma: matricula.IDTurma }
                });

                const matriculaCompleta = {
                    IDCurso: matricula.IDCurso,
                    IDTurma: matricula.IDTurma,
                    NomeCurso: cursoEncontrado ? cursoEncontrado.Nome : 'Curso não encontrado',
                    PeriodoTurma: turmaEncontrada ? turmaEncontrada.Periodo : 'Turma não encontrada'
                };
                
                matriculasCompletas.push(matriculaCompleta);
            }
            console.log('ALUNO')
            res.render('../views/selecionar', { pessoaEncontrada:  { IDPessoa: id }, nome, matriculasEncontradas: matriculasCompletas, funcionario});

        }
    }
}