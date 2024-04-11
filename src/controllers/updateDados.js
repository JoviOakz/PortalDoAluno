const pessoa = require('../model/pessoa');
const fs = require('fs');

module.exports = {

    async updateDados(req, res) {
        const dados = req.body;

        const pessoaa = await pessoa.findOne({
            where: { IDPessoa: dados.id }
        });

        let foto = pessoaa.Foto;
        // Verificando se foi enviada alguma foto
        if (req.file) {
            // Pegar novo nome da foto
            foto = req.file.filename;
        }

        // Comparar os dados atuais com os dados enviados no corpo da requisição
        Object.keys(dados).forEach(key => {
            if (pessoaa[key] !== dados[key]) {
                pessoaa[key] = dados[key];
            }
        });


        if (fs.existsSync(`../../public/img/${pessoaa.Foto}`)) {
            // Exclui o arquivo
            fs.unlink(`../../public/img/${pessoaa.Foto}`, (err) => {
                if (err) {
                    console.error('Erro ao excluir o arquivo:', err);
                } else {
                    console.log('Arquivo excluído com sucesso!');
                }
            });
        } else {
            console.log('O arquivo não existe.');
        }

        pessoaa.Foto = foto;

        // Atualiza os dados no banco de dados
        await pessoaa.save();

        res.redirect(`/perfil?idPessoa=${dados.id}&selecionado=${dados.selec}&funcionario=${dados.func}&pagina=perfil`);
    }
}