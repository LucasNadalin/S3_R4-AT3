const express = require("express");
const app = express();
const PORT = 8082;

try {
    function operacao(req, res) {
        const numUm = parseFloat(req.params.numUm);
        const numDois = parseFloat(req.params.numDois);

        if (numUm & numDois == undefined || numUm & numDois == "" || isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send(`Caractere inválido ou faltante, digite um número!`);
        };
    };

} catch (error) {
    console.error("Erro ao realizar o calculo!" + error)
    res.status(500).send(`Erro interno no servidor!`)
}

app.get("/soma/:numUm/:numDois", (req, res) => { });
app.get("/subtracao/:numUm/:numDois", (req, res) => { });
app.get("/multiplicacao/:numUm/:numDois", (req, res) => { });
app.get("/divisao/:numUm/:numDois", (req, res) => { });

app.listen(PORT, () => {
    console.log(`Servidor rodando http://localhost:${PORT}`)
});


//let resultado

// res.status(200).send(`Resultado: ${resultado.toFixed(2)}`);