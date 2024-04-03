// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const login = require('./src/controllers/login');
const pagSelecionar  = require('./src/controllers/pagSelecionar');
const controllerNews = require('./src/controllers/news')


// Iniciando as rotas
route.get('/', home.pagLogin);
route.post('/', login.verificarLogin);

route.get('/selecionar', pagSelecionar.selecionar);
route.post('/selecionar', pagSelecionar.selecionado);

route.get('/news', controllerNews.dados);

route.get('/grade-curricular', home.pagGradeCurricular);

route.get('/boletos', home.pagBoletos);

route.get('/perfil', home.pagPerfil);

module.exports = route;