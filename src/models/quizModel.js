var database = require("../database/config");

function buscarQuestoesQuiz(idQuiz) {
    var instrucaoSql = `SELECT pergunta, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta, peso 
    FROM questao WHERE fkQuiz = ${idQuiz};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function enviarPontuacao(idQuiz, idUsuario, pontuacao) {
    var instrucaoSql = `INSERT INTO tentativa (fkQuiz, fkUsuario, pontuacao) VALUES
    (${idQuiz}, ${idUsuario}, ${pontuacao});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarQuestoesQuiz,
    enviarPontuacao
}