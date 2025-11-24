var database = require("../database/config");

function buscarDadosPlataforma() {
    var instrucaoSql = `SELECT p.nome AS Plataforma, COUNT(idUsuario) AS QuantidadeTotal
    FROM usuario JOIN plataforma AS p
	    ON p.idPlataforma = fkPlataforma
    GROUP BY p.nome;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosTipoJogo() {
    var instrucaoSql = `SELECT t.nome AS TipoJogo, COUNT(idUsuario) as QuantidadeTotal
    FROM usuario JOIN tipoJogo AS t
	    ON idTipoJogo = fkTipoJogo
    GROUP BY t.nome;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosGenero() {
    var instrucaoSql = `SELECT genero, COUNT(idUsuario) AS QuantidadeTotal
    FROM usuario
	GROUP BY genero;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosIdade() {
    var instrucaoSql = `SELECT
	    CASE
		    WHEN TIMESTAMPDIFF(YEAR, nascimento, now()) < 18 THEN '<18 anos'
            WHEN TIMESTAMPDIFF(YEAR, nascimento, now()) < 31 THEN '18-30 anos'
            WHEN TIMESTAMPDIFF(YEAR, nascimento, now()) < 46 THEN '30-45 anos'
            ELSE '>45 anos'
	    END AS FaixaEtaria,
        COUNT(idUsuario) AS QuantidadeTotal
    FROM usuario
    GROUP BY faixaEtaria;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPlataformaPreferida() {
    var instrucaoSql = `SELECT p.nome FROM usuario JOIN plataforma AS p
	ON fkPlataforma = idPlataforma
    GROUP BY p.nome
	ORDER BY COUNT(idUsuario) DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTipoJogoPreferido() {
    var instrucaoSql = `SELECT t.nome FROM usuario JOIN tipoJogo AS t
	ON fkTipoJogo = idTipoJogo
    GROUP BY t.nome
	ORDER BY COUNT(idUsuario) DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIdadeMedia() {
    var instrucaoSql = `SELECT ROUND(AVG(TIMESTAMPDIFF(YEAR, nascimento, now())))
    AS idadeMedia FROM usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarGeneroPredominante() {
    var instrucaoSql = `SELECT genero FROM usuario
    GROUP BY genero
    ORDER BY COUNT(idUsuario) DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDadosPlataforma,
    buscarDadosTipoJogo,
    buscarDadosGenero,
    buscarDadosIdade,
    buscarPlataformaPreferida,
    buscarTipoJogoPreferido,
    buscarIdadeMedia,
    buscarGeneroPredominante
}