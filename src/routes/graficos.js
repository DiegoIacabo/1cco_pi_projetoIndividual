var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/dadosPlataforma", function (req, res) {
    graficoController.buscarDadosPlataforma(req, res);
});

router.get("/dadosTipoJogo", function (req, res) {
    graficoController.buscarDadosTipoJogo(req, res);
});

router.get("/dadosGenero", function (req, res){
    graficoController.buscarDadosGenero(req, res);
})

router.get("/dadosIdade", function (req, res){
    graficoController.buscarDadosIdade(req, res);
})

router.get("/plataformaPreferida", function (req, res) {
    graficoController.buscarPlataformaPreferida(req, res);
});

router.get("/tipoJogoFavorito", function (req, res) {
    graficoController.buscarTipoJogoPreferido(req, res);
});

router.get("/generoPredominante", function (req, res) {
    graficoController.buscarGeneroPredominante(req, res);
});

router.get("/idadeMedia", function (req, res) {
    graficoController.buscarIdadeMedia(req, res);
});

module.exports = router;