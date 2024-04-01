const pessoa = require('../model/pessoa');


module.exports = {

    async verificarLogin(req, res) {

        const login = req.body.loginn;
        const senha = req.body.senhaa;
        let resultado = true;

        console.log(login);

        const pessoaEncontrada = await pessoa.findOne({
            raw: true,
            attributes: ['Nome', 'CPF', 'Senha', 'IDPessoa'],
            where: { CPF: login, Senha: senha }
        });



        if (pessoaEncontrada) {
            res.render('../views/home', { pessoaEncontrada });
        }
        else {
            resultado = false;
            res.render('../views/login', { resultado });
        }
    }
}