var quizModel = require("../models/quizModel");

function buscarQuestoesQuiz(req, res) {

    console.log(`Buscando as questões do Quiz Geral`);

    var idQuiz = req.params.idQuiz;

    quizModel.buscarQuestoesQuiz(idQuiz).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarQuestoesQuiz
}