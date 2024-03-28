module.exports = {
    async pagHome(req, res) {
        res.render('../views/home');
    },
    async pagLogin(req, res) {
        res.render('../views/login', {resultado: true});
    },
    async pagGradeCurricular(req, res) {
        res.render('../views/gradeCurricular');
    },
    async pagBoletos(req, res) {
        res.render('../views/boletos');
    }
}