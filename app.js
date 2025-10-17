const express = require("express");
const app = express();
const PORT = 8083;

app.get("/soma/:numUm/:numDois", (req, res) => {
    try {
        const numUm = parseFloat(req.params.numUm);
        const numDois = parseFloat(req.params.numDois);

        if (numUm & numDois == undefined || isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send(`Caractere inválido ou faltante, digite um número!`);
        };

        const resultado = numUm + numDois;

        res.status(200).send(`Resultado da Soma: ${resultado.toFixed(2)}`);

    } catch (error) {
        console.error("Erro ao realizar o calculo!" + error)
        res.status(500).send(`Erro interno no servidor!`)
    }
});

app.get("/subtracao/:numUm/:numDois", (req, res) => {
    try {
        const numUm = parseFloat(req.params.numUm);
        const numDois = parseFloat(req.params.numDois);

        if (numUm & numDois == undefined || isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send(`Caractere inválido ou faltante, digite um número!`);
        };

        const resultado = numUm - numDois;

        res.status(200).send(`Resultado da Subtração: ${resultado.toFixed(2)}`)

    } catch (error) {
        console.error("Erro ao realizar o calculo!" + error)
        res.status(500).send(`Erro interno no servidor!`)
    }
});

app.get("/multiplicacao/:numUm/:numDois", (req, res) => {
    try {
        const numUm = parseFloat(req.params.numUm);
        const numDois = parseFloat(req.params.numDois);

        if (numUm & numDois == undefined || isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send(`Caractere inválido ou faltante, digite um número!`);
        };

        const resultado = numUm * numDois;

        res.status(200).send(`Resultado da Multiplicação: ${resultado.toFixed(2)}`)

    } catch (error) {
        console.error("Erro ao realizar o calculo!" + error)
        res.status(500).send(`Erro interno no servidor!`)
    }
});

app.get("/divisao/:numUm/:numDois", (req, res) => {
    try {
        const numUm = parseFloat(req.params.numUm);
        const numDois = parseFloat(req.params.numDois);

        if (numUm & numDois == undefined || isNaN(numUm) || isNaN(numDois)) {
            return res.status(400).send(`Caractere inválido ou faltante, digite um número!`);
        };

        if (numDois === 0) {
            return res.status(400).send("Não é possível fazer divisão por 0");
        } else {
            const resultado = numUm / numDois;
            res.status(200).send(`Resultado da Divisão: ${resultado.toFixed(2)}`)
        };

    } catch (error) {
        console.error("Erro ao realizar o calculo!" + error)
        res.status(500).send(`Erro interno no servidor!`)
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando http://localhost:${PORT}`);
});