const materia = require('../model/materia');

module.exports = {

    async selecionarMateria(req, res) {
        const professor = req.query.idProfessor;
        const nome = req.query.nomeProfessor;

    
         console.log(professor);// Log do professor, se necessário
    
    
        const materiasEncontradas = await materia.findAll({
            raw: true,
            attributes: ['Nome', 'Data'],
            where: { IDPessoa: professor }
        });

        
        console.log(materiasEncontradas);
        
        res.render('../views/materia', { pessoaEncontrada:  { IDPessoa: professor }, materiasEncontradas, nome});
    }
}