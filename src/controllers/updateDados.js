const matricula = require('../model/matricula');
const curso = require('../model/curso');
const turma = require('../model/turma');
const materia = require('../model/materia');
const pessoa = require('../model/pessoa');



module.exports = {

    async updateDados(req, res) {
        // const idPessoa = req.query.idPessoa;
    
        // const dados = req.body;

        // const encontrarPessoa = await pessoa.findOne({
        //     raw: true,
        //     attributes: ['IDPessoa', 'Nome', 'CPF', 'DataNascimento', 'Foto', 'Funcionario', 'Senha', 'Email', 'Telefone', 'CEP', 'Cidade', 'Estado', 'Bairro', 'Rua', 'Numero', 'Complemento', 'Mae', 'Pai'],
        //     where: { IDPessoa: idPessoa }
        // });



        // // Atualiza os dados no banco de dados
        // const pessoaAtualizada = await pessoa.update(
        //     {  Nome: dados.nome, 
        //         CPF: dados.cpf,
        //         Sexo: dados.sexo,
        //         DataNascimento: dados.nascimento,
        //         Foto: foto,
        //         Funcionario: dados.funcionario,
        //         Senha: dados.senha01,
        //         Email: dados.email,
        //         Telefone: dados.telefone,
        //         CEP: dados.cep,
        //         Cidade: dados.cidade,
        //         Estado: dados.estado,
        //         Bairro: dados.bairro,
        //         Rua: dados.rua,
        //         Numero: dados.numero,
        //         Complemento: dados.complemento,
        //         Mae: dados.mae,
        //         Pai: dados.pai }, // Novos dados que serão atualizados
        //     {
        //         where: { IDPessoa: idPessoa }, // Condição para selecionar a pessoa que será atualizada
        //         returning: true // Retorna o registro atualizado
        //     }
        // );
        

        // if (pessoaAtualizada) {
        //     res.status(200).json({ mensagem: 'Dados atualizados com sucesso', pessoa: pessoaAtualizada });
        // } else {
        //     res.status(404).json({ erro: 'Pessoa não encontrada' });
        // }



        try {
            const pessoaAtual = await pessoa.findOne({
                where: { IDPessoa: idPessoa }
            });
    
            if (!pessoaAtual) {
                return res.status(404).json({ erro: 'Pessoa não encontrada' });
            }
    
            // Comparar os dados atuais com os dados enviados no corpo da requisição
            Object.keys(dados).forEach(key => {
                if (pessoaAtual[key] !== dados[key]) {
                    pessoaAtual[key] = dados[key];
                }
            });
    
            // Atualiza os dados no banco de dados
            await pessoaAtual.save();
    
            res.status(200).json({ mensagem: 'Dados atualizados com sucesso', pessoa: pessoaAtual });
        } catch (error) {
            console.error('Erro ao atualizar dados:', error);
            res.status(500).json({ erro: 'Erro interno do servidor' });
        }
        
    }
}

