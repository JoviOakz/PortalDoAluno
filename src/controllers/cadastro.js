const matricula = require('../model/matricula');
const curso = require('../model/curso');
const turma = require('../model/turma');
const materia = require('../model/materia');
const pessoa = require('../model/pessoa');


module.exports = {

    async cadastrarAluno(req, res) {

        const dados = req.body;

        await sala.create({
            Nome: dados.nome, 
            CPF: dados.cpf,
            DataNascimento: dados.nascimento,
            Foto: 'foto.jpg',
            Funcionario: dados.funcionario,
            Senha: dados.senha,
            Email: dados.email,
            Telefone: dados.telefone,
            CEP: dados.cep,
            Cidade: dados.cidade,
            Estado: dados.estado,
            Bairro: dados.bairro,
            Rua: dados.rua,
            Numero: dados.numero,
            Complemento: dados.complemento,
            Mae: dados.mae,
            Pai: dados.pai
        });
        // Redirecionar para a página principal
        res.redirect('/selecaoCadastro');
    }
}