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

function enviarPontuacao(req, res) {

    console.log('Enviando pontuação para o Banco de Dados');

    var idQuiz = req.params.idQuiz;
    var idUsuario = req.params.idUsuario;
    var pontuacao = req.body.pontuacaoServer;

    if (idQuiz == undefined) {
        res.status(400).send('O id do Quiz está undefined!');
    } else if (idUsuario == undefined) {
        res.status(400).send('O id do Usuário está undefined!');
    } else if (pontuacao == undefined){
        res.status(400).send('A pontuação está undefined!');
    } else {
        
        quizModel.enviarPontuacao(idQuiz, idUsuario, pontuacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao enviar a pontuação! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    buscarQuestoesQuiz,
    enviarPontuacao
}