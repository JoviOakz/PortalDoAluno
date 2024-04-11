const matricula = require('../model/matricula');
const curso = require('../model/curso');
const turma = require('../model/turma');
const materia = require('../model/materia');
const pessoa = require('../model/pessoa');


module.exports = {

    async selecionar(req, res) {
        const id = req.query.idPessoa;
        const nome = req.query.nomePessoa;
        const funcionario = req.query.funcionario;

        console.log(funcionario);
        const matriculasCompletas = [];
        

        if(funcionario == '1'){

            const materiasEncontradas = await materia.findAll({
            raw: true,
            attributes: ['IDMateria','Nome', 'Data'],
            where: { IDPessoa: id }
            });
            console.log('FUNCIONARIO')
            res.render('../views/selecionar', { pessoaEncontrada:  { IDPessoa: id }, materiasEncontradas, nome, funcionario});
        }
        else if(funcionario == '0'){
            
            const matriculasEncontradas = await matricula.findAll({
                raw: true,
                attributes: ['IDMatricula','IDCurso', 'IDTurma'],
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
                    IDMatricula: matricula.IDMatricula,
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
        else if(funcionario == '2'){
            res.render('../views/selecaoCadastro', {id});
        }
    },


    async selecionado(req, res){

        const idSelecionado = req.body.flexRadioDefault; // Obtém o valor do botão de rádio selecionado
        const valores = idSelecionado.split('='); // Divide o valor em partes usando o caractere '='
    
        const idMatricula = valores[0]; // O primeiro valor é o ID da matrícula ou da matéria
        const idPessoa = valores[1]; // O segundo valor é o ID da pessoa
        const funcionario = valores[2]; // O terceiro valor é a informação sobre se é funcionário     

        res.redirect(`/news?idPessoa=${idPessoa}&selecionado=${idMatricula}&funcionario=${funcionario}&pagina=news`);  
    }
}