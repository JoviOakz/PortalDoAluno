


module.exports = {
    async pagLogin(req, res) {
        res.render('../views/login', {resultado: true});
    },
    async pagSelecaoCadastro(req, res){
        res.render('../views/selecaoCadastro')
    },
    async pagFormsCadastro(req, res){
        res.render('../views/formsCadastro')
    }
}