const pessoa = require('../model/pessoa');
const matricula = require('../model/matricula');
const curso = require('../model/curso');
const turma = require('../model/turma');


module.exports = {

    async verificarLogin(req, res) {

        const login = req.body.loginn;
        const senha = req.body.senhaa;
        

        

        const pessoaEncontrada = await pessoa.findOne({
            raw: true,
            attributes: ['Nome', 'CPF', 'Senha', 'IDPessoa'],
            where: { CPF: login, Senha: senha }
        });

        if(pessoaEncontrada){
            res.redirect(`/selecionar-matricula?idAluno=${pessoaEncontrada.IDPessoa}`);

        }
        else {
            resultado = false;
            res.render('../views/login', { resultado });
        }
        
    },

    async selecionarCurso(req, res) {
        const aluno = req.query.idAluno;

    
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
        
            

        res.render('../views/matricula', { pessoaEncontrada:  { IDPessoa: aluno }, matriculasEncontradas});
    }
    
}