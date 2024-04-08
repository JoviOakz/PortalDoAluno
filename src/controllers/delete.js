const pessoa = require('../model/pessoa');
const matricula = require('../model/matricula');

module.exports = {
    async deletarAluno(req, res) {
        const cpf = req.body.cpf;

        console.log(cpf);

        if (!cpf) {
            return res.status(400).json({ error: 'CPF inválido' });
        }

        const aluno = await pessoa.findOne({
            where: { CPF: cpf }
        }); // Tente encontrar o aluno pelo CPF e excluí-lo do banco de dados

        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }

        try {
            // Busque a matrícula do aluno
            await matricula.destroy({
                where: { IDPessoa: aluno.IDPessoa }
            });

            // Exclua o aluno do banco de dados
            await aluno.destroy();

            res.redirect('/selecaoCadastro');
        } catch (error) {
            console.error('Erro ao excluir aluno:', error);
            res.status(500).json({ error: 'Erro interno do servidor ao excluir aluno' });
        }
    }
}