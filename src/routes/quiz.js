var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/questoes/:idQuiz", function (req, res) {
    quizController.buscarQuestoesQuiz(req, res);
})

module.exports = router;