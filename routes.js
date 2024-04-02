// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const login = require('./src/controllers/login');
const selecionar  = require('./src/controllers/selecionar');


// Iniciando as rotas
route.get('/', home.pagLogin);
route.post('/', login.verificarLogin);

route.get('/selecionar', selecionar.selecionar);

route.get('/home', home.pagHome);

route.get('/grade-curricular', home.pagGradeCurricular);

route.get('/boletos', home.pagBoletos);

module.exports = route;