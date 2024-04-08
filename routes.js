// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Iniciando Multer
const multer = require("multer");
// Recebendo arquivo do multer que criamos
const config = require('./src/config/multer');

// Importando os Controllers
const home = require('./src/controllers/home');
const login = require('./src/controllers/login');
const pagSelecionar  = require('./src/controllers/pagSelecionar');
const controllerDados = require('./src/controllers/dados');
const cadastro = require('./src/controllers/cadastro');
const controllerDelete = require('./src/controllers/delete')


// Iniciando as rotas
route.get('/', home.pagLogin);
route.post('/', login.verificarLogin);

route.get('/selecionar', pagSelecionar.selecionar);
route.post('/selecionar', pagSelecionar.selecionado);

route.get('/news', controllerDados.dados);

route.get('/gradeCurricular', controllerDados.dados);

route.get('/avaliacao', controllerDados.dados);

route.get('/boletos', controllerDados.dados);

route.get('/perfil', controllerDados.dados);

route.get('/selecaoCadastro', home.pagSelecaoCadastro);

route.get('/deleteAluno', home.pagDeleteAluno);
route.post('/deleteAluno', controllerDelete.deletarAluno);

route.get('/formsCadastro', home.pagFormsCadastro);
route.post('/formsCadastro',multer(config).single('foto'), cadastro.cadastrarAluno);

module.exports = route;