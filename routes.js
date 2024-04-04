// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const login = require('./src/controllers/login');
const pagSelecionar  = require('./src/controllers/pagSelecionar');
const controllerDados = require('./src/controllers/dados')


// Iniciando as rotas
route.get('/', home.pagLogin);
route.post('/', login.verificarLogin);

route.get('/selecionar', pagSelecionar.selecionar);
route.post('/selecionar', pagSelecionar.selecionado);

route.get('/news', controllerDados.dados);

route.get('/gradeCurricular', controllerDados.dados);

route.get('/boletos', controllerDados.dados);

route.get('/perfil', controllerDados.dados);

route.get('/formsCadastro', home.pagFormsCadastro);


module.exports = route;