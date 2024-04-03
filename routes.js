// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');
const login = require('./src/controllers/login');
const selecionarAluno  = require('./src/controllers/selecionarAluno');
const selecionarProfessor = require('./src/controllers/selecionarProfessor');

// Iniciando as rotas
route.get('/', home.pagLogin);
route.post('/', login.verificarLogin);

route.get('/selecionar-matricula', selecionarAluno.selecionarCurso);

route.get('/selecionar-materia', selecionarProfessor.selecionarMateria);

route.get('/home', home.pagHome);

route.get('/grade-curricular', home.pagGradeCurricular);

route.get('/boletos', home.pagBoletos);

route.get('/perfil', home.pagPerfil);

module.exports = route;