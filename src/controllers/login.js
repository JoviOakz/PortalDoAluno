const pessoa = require('../model/pessoa');

module.exports = {

    async verificarLogin(req, res) {

        const login = req.body.loginn;
        const senha = req.body.senhaa;
        let resultado

        const pessoaEncontrada = await pessoa.findOne({
            raw: true,
            attributes: ['Nome', 'CPF', 'Senha', 'IDPessoa', 'Funcionario'],
            where: { CPF: login, Senha: senha }
        });

        

        if(pessoaEncontrada && (pessoaEncontrada.Funcionario == 0 || pessoaEncontrada.Funcionario == 1)){
            resultado = true;
            res.redirect(`/selecionar?idPessoa=${pessoaEncontrada.IDPessoa}&nomePessoa=${pessoaEncontrada.Nome}&funcionario=${pessoaEncontrada.Funcionario}`);  
        }
        else if(pessoaEncontrada && pessoaEncontrada.Funcionario == 2){
            res.redirect('/selecaoCadastro');
        }
        else {
            resultado = false;
            res.render('../views/login', {resultado});
        }
    }
}