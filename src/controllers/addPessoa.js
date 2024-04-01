const pessoa = require('../model/pessoa');
const curso = require('../model/curso');
const materia = require('../model/materia');
const turma = require('../model/turma');


async function adicionarPessoa(nome, cpf, dataNascimento, funcionario) {
    
    const pessoaCriada = await pessoa.create({
        Nome: nome,
        CPF: cpf,
        DataNascimento: dataNascimento,
        Funcionario: funcionario,
        Senha: 'senai123',
        Foto: 'img/default.png'
    });
}

adicionarPessoa('Eduardo Henrique', '32109876544', '1989-03-15', true);
adicionarPessoa('Julia Trembulack', '32109876541', '1990-08-08', true);
adicionarPessoa('Fernanda Oliveira', '98765432123', '1987-06-25', true);
adicionarPessoa('Pedro Oliveira', '45678912302', '1995-03-25', true);
adicionarPessoa('Maria Santos', '98765432109', '1988-10-20', false);
adicionarPessoa('Ana Souza', '78901234560', '1992-07-08', false);
adicionarPessoa('Lucas Pereira', '32109876542', '1985-12-12', false);
adicionarPessoa('Carlos Silva', '13579246801', '1993-08-17', false);
adicionarPessoa('Rafaela Santos', '45678901234', '1999-02-12', false);
adicionarPessoa('Gustavo Pereira', '78901234567', '1990-11-30', false);
adicionarPessoa('Juliana Costa', '32109876543', '1984-05-08', false);


async function adicionarCurso(nome, horas) {
    
    const cursoCriado = await curso.create({
        Nome: nome,
        HorasComplementares: horas
    });
}

adicionarCurso('Engenharia de Software', 320);


async function adicionarTurma(nome, periodo) {
    const turmaCriado = await turma.create({
        Nome: nome,
        Periodo: periodo
    });
}

adicionarTurma('A', 1);
adicionarTurma('A', 2);
adicionarTurma('A', 3);
adicionarTurma('A', 4);
adicionarTurma('A', 5);
adicionarTurma('A', 6);
adicionarTurma('A', 7);
adicionarTurma('A', 8);


async function adicionarMateria(nome, data, desc, id) {
    const materiaCriada = await materia.create({
        Nome: nome,
        Data: data,
        Descricao: desc,
        IDPessoa: id
    });
}

adicionarMateria('Design e Aplicações de Engenharia de Software', 'Segunda', 'Esta disciplina explora os princípios e práticas de design de software, abordando desde a concepção até a implementação de sistemas de software eficientes e robustos.', 1);
adicionarMateria('Estatística Orientada a Ciência de Dados', 'Terça', 'Nesta disciplina, os alunos aprendem a aplicar técnicas estatísticas para analisar e interpretar dados, visando extrair insights valiosos que informam processos de tomada de decisão na ciência de dados.', 2);
adicionarMateria('Jornada de Aprendizagem: Engenharia de Requisitos e Gerência de Configuração', 'Quarta', 'Contato direto com a indústria de software para resolver problemas reais. Aprenda a identificar requisitos e controlar mudanças nos projetos, preparando-se para desafios do mundo real.', 3);
adicionarMateria('Lógica Computacional', 'Quinta', 'Introdução aos princípios fundamentais da lógica aplicados à computação, cobrindo lógica proposicional, de predicados e técnicas de prova. Essencial para a modelagem e análise de algoritmos e sistemas de computação.', 4);


adicionarMateria('Ciência, Tecnologia e Sustentabilidade', 'Segunda', 'Aplicações práticas de ciência e tecnologia visando soluções sustentáveis para desafios industriais, ambientais e sociais, alinhadas com os princípios da indústria 4.0.', 4);
adicionarMateria('Design de Software Aplicado a Engenharia', 'Terça', 'Aplica princípios de design de software para desenvolver soluções eficientes e escaláveis para problemas de engenharia, abrangendo desde arquitetura até implementação.', 3);
adicionarMateria('Jornada de Aprendizagem - Inovação e às Necessidades da Sociedade', 'Quarta', 'Oferece uma imersão na inovação tecnológica, com foco nas necessidades da sociedade, explorando soluções criativas para problemas reais.', 2);
adicionarMateria('Matemática Discreta e Finita', 'Quinta', 'Estudo de estruturas matemáticas discretas, como conjuntos, lógica proposicional e teoria dos grafos, fundamentais para a computação e a resolução de problemas complexos.', 1);



