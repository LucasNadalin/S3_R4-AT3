const express = require("express");
const app = express();
const PORT = 8083;

app.get("/soma/:numUm/:numDois", (req, res) => {
    try {
        const {numUm, numDois} = req.params;

        if (numUm == undefined || numUm == "" || numDois == undefined || numDois == "" || isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send(`Caractere inválido ou faltante, digite um número!`);
        };

        const resultado = parseFloat(numUm) + parseFloat(numDois);

        res.status(200).send(`Resultado da Soma: ${resultado.toFixed(2)}`);

    } catch (error) {
        console.error("Erro ao realizar o calculo!" + error)
        res.status(500).send(`Erro interno no servidor!`)
    }
});

app.get("/subtracao/:numUm/:numDois", (req, res) => {
    try {
        const {numUm, numDois} = req.params;

        if (numUm == undefined || numUm == "" || numDois == undefined || numDois == "" || isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send(`Caractere inválido ou faltante, digite um número!`);
        };

        const resultado = parseFloat(numUm) - parseFloat(numDois);

        res.status(200).send(`Resultado da Subtração: ${resultado.toFixed(2)}`)

    } catch (error) {
        console.error("Erro ao realizar o calculo!" + error)
        res.status(500).send(`Erro interno no servidor!`)
    }
});

app.get("/multiplicacao/:numUm/:numDois", (req, res) => {
    try {
        const {numUm, numDois} = req.params;
        if (numUm == undefined || numUm == "" || numDois == undefined || numDois == "" || isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send(`Caractere inválido ou faltante, digite um número!`);
        };

        const resultado = parseFloat(numUm) * parseFloat(numDois);

        res.status(200).send(`Resultado da Multiplicação: ${resultado.toFixed(2)}`)

    } catch (error) {
        console.error("Erro ao realizar o calculo!" + error)
        res.status(500).send(`Erro interno no servidor!`)
    }
});

app.get("/divisao/:numUm/:numDois", (req, res) => {
    try {
        const {numUm, numDois} = req.params;

        if (numUm == undefined || numUm == "" || numDois == undefined || numDois == "" || isNaN(numUm) || isNaN(numDois) || numDois == 0) {
            return res.status(400).send(`Caractere inválido, faltante ou tentativa de divisao por 0`);
        };

        const resultado = parseFloat(numUm) / parseFloat(numDois);

        res.status(200).send(`Resultado da Divisão: ${resultado.toFixed(2)}`)

    } catch (error) {
        console.error("Erro ao realizar o calculo!" + error)
        res.status(500).send(`Erro interno no servidor!`)
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando http://localhost:${PORT}`);
});