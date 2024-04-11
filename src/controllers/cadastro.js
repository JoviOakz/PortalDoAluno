const matricula = require('../model/matricula');
const curso = require('../model/curso');
const turma = require('../model/turma');
const materia = require('../model/materia');
const pessoa = require('../model/pessoa');


module.exports = {

    async cadastrarAluno(req, res) {

        const dados = req.body;

        let foto = 'foto.png';
        // Verificando se foi enviada alguma foto
        if (req.file) {
            // Pegar novo nome da foto
            foto = req.file.filename;
        }

        if(dados.funcionario == "ADM"){
            funcionario = 2
        }
        else if(dados.funcionario == "Aluno"){
            funcionario = 0
        }
        else if(dados.funcionario == "Professor"){
            funcionario = 1
        }

        await pessoa.create({
            Nome: dados.nome, 
            CPF: dados.cpf,
            Sexo: dados.sexo,
            DataNascimento: dados.nascimento,
            Foto: foto,
            Funcionario: dados.funcionario,
            Senha: dados.senha01,
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