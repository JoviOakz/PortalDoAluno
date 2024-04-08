const pessoa = require('../model/pessoa');
const curso = require('../model/curso');
const materia = require('../model/materia');
const turma = require('../model/turma');
const matricula = require('../model/matricula');


async function adicionarPessoa(nome, sexo, cpf, dataNascimento, foto, funcionario, senha, email, telefone, cep, cidade, estado, bairro, rua, numero, mae, pai) {
    try {
        const pessoaCriada = await pessoa.create({
            Nome: nome,
            Sexo: sexo,
            CPF: cpf,
            DataNascimento: dataNascimento,
            Foto: foto,
            Funcionario: funcionario,
            Senha: senha,
            Email: email,
            Telefone: telefone,
            CEP: cep,
            Cidade: cidade,
            Estado: estado,
            Bairro: bairro,
            Rua: rua,
            Numero: numero,
            Mae: mae,
            Pai: pai
        });

        console.log("Pessoa adicionada com sucesso:", pessoaCriada);
    } catch (error) {
        console.error("Erro ao adicionar pessoa:", error);
    }
}


adicionarPessoa('Eduardo Henrique', 'Masculino', '32109876544', '1989-03-15', 'foto.jpg', 1, 'senha123', 'email@example.com', '1234567890', '12345-678', 'Cidade', 'Estado', 'Bairro', 'Rua', '123', 'Mãe', 'Pai');
adicionarPessoa('Julia Trembulack', 'Feminino', '32109876541', '1990-08-08', 'foto.jpg', 1, 'senha123', 'email@example.com', '1234567890', '12345-678', 'Cidade', 'Estado', 'Bairro', 'Rua', '123', 'Mãe', 'Pai');
adicionarPessoa('Fernanda Oliveira', 'Feminino', '98765432123', '1987-06-25', 'foto.jpg', 1, 'senha123', 'email@example.com', '1234567890', '12345-678', 'Cidade', 'Estado', 'Bairro', 'Rua', '123', 'Mãe', 'Pai');
adicionarPessoa('Pedro Oliveira', 'Masculino', '45678912302', '1995-03-25', 'foto.jpg', 1, 'senha123', 'email@example.com', '1234567890', '12345-678', 'Cidade', 'Estado', 'Bairro', 'Rua', '123', 'Mãe', 'Pai');
adicionarPessoa('Maria Santos', 'Feminino', '98765432109', '1988-10-20', 'foto.jpg', 0, 'senha123', 'email@example.com', '1234567890', '12345-678', 'Cidade', 'Estado', 'Bairro', 'Rua', '123', 'Mãe', 'Pai');
adicionarPessoa('Ana Souza', 'Feminino', '78901234560', '1992-07-08', 'foto.jpg', 0, 'senha123', 'email@example.com', '1234567890', '12345-678', 'Cidade', 'Estado', 'Bairro', 'Rua', '123', 'Mãe', 'Pai');
adicionarPessoa('Lucas Pereira', 'Masculino', '32109876542', '1985-12-12', 'foto.jpg', 0, 'senha123', 'email@example.com', '1234567890', '12345-678', 'Cidade', 'Estado', 'Bairro', 'Rua', '123', 'Mãe', 'Pai');
adicionarPessoa('Carlos Silva', 'Masculino', '13579246801', '1993-08-17', 'foto.jpg', 0, 'senha123', 'email@example.com', '1234567890', '12345-678', 'Cidade', 'Estado', 'Bairro', 'Rua', '123', 'Mãe', 'Pai');
adicionarPessoa('Rafaela Santos', 'Masculino', '45678901234', '1999-02-12', 'foto.jpg', 0, 'senha123', 'email@example.com', '1234567890', '12345-678', 'Cidade', 'Estado', 'Bairro', 'Rua', '123', 'Mãe', 'Pai');
adicionarPessoa('Gustavo Pereira', 'Masculino', '78901234567', '1990-11-30', 'foto.jpg', 0, 'senha123', 'email@example.com', '1234567890', '12345-678', 'Cidade', 'Estado', 'Bairro', 'Rua', '123', 'Mãe', 'Pai');
adicionarPessoa('Juliana Costa', 'Feminino', '32109876543', '1984-05-08', 'foto.jpg', 0, 'senha123', 'email@example.com', '1234567890', '12345-678', 'Cidade', 'Estado', 'Bairro', 'Rua', '123', 'Mãe', 'Pai');

async function adicionarCurso(nome, horas) {
    
    const cursoCriado = await curso.create({
        Nome: nome,
        HorasComplementares: horas
    });
}

adicionarCurso('Engenharia de Software', 320);
adicionarCurso('Desenvolvimento de Sistemas', 220);


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

adicionarMateria('Design e Aplicações de Engenharia de Software', 'Segunda', 'Esta disciplina explora os princípios e práticas de design de software, abordando desde a concepção até a implementação de sistemas de software eficientes e robustos.', 4);
adicionarMateria('Estatística Orientada a Ciência de Dados', 'Terça', 'Nesta disciplina, os alunos aprendem a aplicar técnicas estatísticas para analisar e interpretar dados, visando extrair insights valiosos que informam processos de tomada de decisão na ciência de dados.', 5);
adicionarMateria('Jornada de Aprendizagem: Engenharia de Requisitos e Gerência de Configuração', 'Quarta', 'Contato direto com a indústria de software para resolver problemas reais. Aprenda a identificar requisitos e controlar mudanças nos projetos, preparando-se para desafios do mundo real.', 6);
adicionarMateria('Lógica Computacional', 'Quinta', 'Introdução aos princípios fundamentais da lógica aplicados à computação, cobrindo lógica proposicional, de predicados e técnicas de prova. Essencial para a modelagem e análise de algoritmos e sistemas de computação.', 7);


adicionarMateria('Ciência, Tecnologia e Sustentabilidade', 'Segunda', 'Aplicações práticas de ciência e tecnologia visando soluções sustentáveis para desafios industriais, ambientais e sociais, alinhadas com os princípios da indústria 4.0.', 7);
adicionarMateria('Design de Software Aplicado a Engenharia', 'Terça', 'Aplica princípios de design de software para desenvolver soluções eficientes e escaláveis para problemas de engenharia, abrangendo desde arquitetura até implementação.', 6);
adicionarMateria('Jornada de Aprendizagem - Inovação e às Necessidades da Sociedade', 'Quarta', 'Oferece uma imersão na inovação tecnológica, com foco nas necessidades da sociedade, explorando soluções criativas para problemas reais.', 5);
adicionarMateria('Matemática Discreta e Finita', 'Quinta', 'Estudo de estruturas matemáticas discretas, como conjuntos, lógica proposicional e teoria dos grafos, fundamentais para a computação e a resolução de problemas complexos.', 4);


async function adicionarMatricula(pessoa, curso, turma) {
    const matriculaCriada = await matricula.create({
        IDPessoa: pessoa,
        IDCurso: curso,
        IDTurma: turma
    });
}

adicionarMatricula(3, 1, 3)
adicionarMatricula(3, 2, 1)
adicionarMatricula(2, 1, 3)
adicionarMatricula(2, 2, 1)
