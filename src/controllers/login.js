const pessoa = require('../model/pessoa');

module.exports = {

    async verificarLogin(req, res) {

        const login = req.body.loginn;
        const senha = req.body.senhaa;

        const pessoaEncontrada = await pessoa.findOne({
            raw: true,
            attributes: ['Nome', 'CPF', 'Senha', 'IDPessoa', 'Funcionario'],
            where: { CPF: login, Senha: senha }
        });

        let funcionario = pessoaEncontrada.Funcionario

        if(pessoaEncontrada){
            if(funcionario){
                res.redirect(`/selecionar-materia?idProfessor=${pessoaEncontrada.IDPessoa}&nomeProfessor=${pessoaEncontrada.Nome}`);
            }
            else{
                res.redirect(`/selecionar-matricula?idAluno=${pessoaEncontrada.IDPessoa}&nomeAluno=${pessoaEncontrada.Nome}`);
            }
        }
        else {
            resultado = false;
            res.render('../views/login', { resultado});
        }
        
    }
}