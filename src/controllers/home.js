module.exports = {
    async pagNews(req, res) {
        res.render('../views/news');
    },
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