module.exports = {
    async pagLogin(req, res) {
        res.render('../views/login', {resultado: true});
    },
    async pagGradeCurricular(req, res) {
        res.render('../views/gradeCurricular');
    },
    async pagBoletos(req, res) {
        res.render('../views/boletos');
    },
    async pagPerfil(req, res) {
        res.render('../views/perfil');
    }
}