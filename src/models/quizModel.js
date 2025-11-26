var database = require("../database/config");

function buscarQuestoesQuiz(idQuiz) {
    var instrucaoSql = `SELECT pergunta, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta 
    FROM questao WHERE fkQuiz = ${idQuiz};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarQuestoesQuiz
}