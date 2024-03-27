module.exports = {
    async pagHome(req, res) {
        res.render('../views/home');
    },
    async pagLogin(req, res) {
        res.render('../views/login');
    }
}