const matricula = require('../model/matricula');
const curso = require('../model/curso');
const turma = require('../model/turma');
const materia = require('../model/materia');
const pessoa = require('../model/pessoa');



module.exports = {

    async updateDados(req, res) {

        const idPessoa = req.query.idPessoa;
        const selecionado = req.query.selecionado;
        const funcionario = req.query.funcionario;
        const pagina = req.query.pagina;

        console.log(idPessoa);

        const dados = req.body;



        const encontrarPessoa = await pessoa.findOne({
            raw: true,
            attributes: ['IDPessoa', 'Nome', 'CPF', 'DataNascimento', 'Foto', 'Funcionario', 'Senha', 'Email', 'Telefone', 'CEP', 'Cidade', 'Estado', 'Bairro', 'Rua', 'Numero', 'Complemento', 'Mae', 'Pai'],
            where: { IDPessoa: 3 }
        });

        const encontrarMatricula = await matricula.findOne({
            raw: true,
            attributes: ['IDMatricula', 'IDCurso', 'IDTurma'],
            where: { IDMatricula: 1 }
        });
        let idCurso = encontrarMatricula.IDCurso;

            const cursoEncontrado = await curso.findOne({
                raw: true,
                attributes: ['IDCurso', 'Nome', 'HorasComplementares'],
                where: { IDCurso: idCurso }
            });





        const pessoaa = await pessoa.findOne({

            where: { IDPessoa: 3}
        });

        // Comparar os dados atuais com os dados enviados no corpo da requisição
        Object.keys(dados).forEach(key => {
            if (pessoaa[key] !== dados[key]) {
                pessoaa[key] = dados[key];
            }
        });

        // Atualiza os dados no banco de dados
        await pessoaa.save();

        res.redirect(`/perfil?idPessoa=3&selecionado=1&funcionario=0&pagina=perfil`);


    }
}

