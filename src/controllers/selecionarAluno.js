const matricula = require('../model/matricula');
const curso = require('../model/curso');
const turma = require('../model/turma');

module.exports = {

    async selecionarCurso(req, res) {
        const aluno = req.query.idAluno;
        const nome = req.query.nomeAluno;

    
         console.log(aluno);// Log do aluno, se necessário
    
    
        const matriculasEncontradas = await matricula.findAll({
            raw: true,
            attributes: ['IDCurso', 'IDTurma'],
            where: { IDPessoa: aluno }
        });

        
        const matriculasCompletas = [];

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
            console.log(matriculaCompleta);
            matriculasCompletas.push(matriculaCompleta);
        }
        
        res.render('../views/matricula', { pessoaEncontrada:  { IDPessoa: aluno }, nome, matriculasEncontradas: matriculasCompletas});
    }
}