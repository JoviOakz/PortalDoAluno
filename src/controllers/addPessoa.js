const pessoa = require('../model/pessoa');

async function adicionarPessoa(nome, cpf, dataNascimento, funcionario) {
    
    const pessoaCriada = await pessoa.create({
        Nome: nome,
        CPF: cpf,
        DataNascimento: dataNascimento,
        Foto: 'img/default.png',
        Funcionario: funcionario
    });
}

// adicionarPessoa('Maria Santos', '98765432109', '1988-10-20', false);
// adicionarPessoa('Pedro Oliveira', '45678912302', '1995-03-25', true);
// adicionarPessoa('Ana Souza', '78901234567', '1992-07-08', false);
// adicionarPessoa('Lucas Pereira', '32109876543', '1985-12-12', false);
// adicionarPessoa('Carlos Silva', '13579246801', '1993-08-17', false);
// adicionarPessoa('Fernanda Oliveira', '98765432123', '1987-06-25', true);
// adicionarPessoa('Rafaela Santos', '45678901234', '1999-02-12', false);
// adicionarPessoa('Gustavo Pereira', '78901234567', '1990-11-30', false);
// adicionarPessoa('Juliana Costa', '32109876543', '1984-05-08', false);