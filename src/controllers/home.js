module.exports = {
    async pagLogin(req, res) {
        res.render('../views/login', {resultado: true});
    },
    async pagFormsCadastro(req, res){
        res.render('../views/formsCadastro')
    }
}