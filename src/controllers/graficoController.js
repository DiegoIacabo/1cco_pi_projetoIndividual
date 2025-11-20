var graficoModel = require("../models/graficoModel");

function buscarDadosPlataforma(req, res) {

    console.log(`Buscando a plataforma dos usuários`);

    graficoModel.buscarDadosPlataforma().then(function (resultado) {
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

function buscarDadosTipoJogo(req, res) {

    console.log(`Buscando o tipo de jogo preferido dos usuários`);

    graficoModel.buscarDadosTipoJogo().then(function (resultado) {
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

function buscarDadosGenero(req, res) {

    console.log(`Buscando dados do usuário`);

    graficoModel.buscarDadosGenero().then(function (resultado) {
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

function buscarDadosIdade(req, res) {

    console.log(`Buscando dados do usuário`);

    graficoModel.buscarDadosIdade().then(function (resultado) {
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

function buscarPlataformaPreferida(req, res) {
    console.log(`Buscando dados do usuário`);

    graficoModel.buscarPlataformaPreferida().then(function (resultado) {
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

function buscarTipoJogoPreferido(req, res) {
    console.log(`Buscando dados do usuário`);

    graficoModel.buscarTipoJogoPreferido().then(function (resultado) {
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

function buscarIdadeMedia(req, res) {
    console.log(`Buscando dados do usuário`);

    graficoModel.buscarIdadeMedia().then(function (resultado) {
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

function buscarGeneroPredominante(req, res) {
    console.log(`Buscando dados do usuário`);

    graficoModel.buscarGeneroPredominante().then(function (resultado) {
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
    buscarDadosPlataforma,
    buscarDadosTipoJogo,
    buscarDadosGenero,
    buscarDadosIdade,
    buscarPlataformaPreferida,
    buscarTipoJogoPreferido,
    buscarIdadeMedia,
    buscarGeneroPredominante
}