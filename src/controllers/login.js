const pessoa = require('../model/pessoa');


module.exports = {

    async verificarLogin(req, res){

        const login = req.body.loginn;
        const senha = req.body.senhaa;

        console.log(login);

        const pessoaEncontrada = await pessoa.findOne({
            raw: true,
            attributes: ['CPF', 'Senha'],
            where: { CPF: login, Senha:senha }
        });

        const resultado =  pessoaEncontrada;

        if(pessoaEncontrada){
            res.render('../views/home');
        }
        
    }



}
