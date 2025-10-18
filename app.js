const express = require("express");
const app = express();
const PORT = 8083;

app.get("/operacao/:tipo", (req, res) => {
    try {
        const tipo = req.params.tipo;
        const { numUm, numDois } = req.query;

        // Switch Case
        switch (tipo) {
            case "soma":
                if (numUm == undefined || numUm == "" || numDois == undefined || numDois == "" || isNaN(numUm) || isNaN(numDois)) {
                    return res.status(400).send(`Caractere inválido, faltante ou tentativa de divisao por 0`);
                };
                resultado = parseFloat(numUm) + parseFloat(numDois);
                break;
            case "subtracao":
                if (numUm == undefined || numUm == "" || numDois == undefined || numDois == "" || isNaN(numUm) || isNaN(numDois)) {
                    return res.status(400).send(`Caractere inválido, faltante ou tentativa de divisao por 0`);
                };
                resultado = parseFloat(numUm) - parseFloat(numDois);
                break;
            case "multiplicacao":
                if (numUm == undefined || numUm == "" || numDois == undefined || numDois == "" || isNaN(numUm) || isNaN(numDois)) {
                    return res.status(400).send(`Caractere inválido, faltante ou tentativa de divisao por 0`);
                };
                resultado = parseFloat(numUm) * parseFloat(numDois);
                break;
            case "divisao":
                if (numUm == undefined || numUm == "" || numDois == undefined || numDois == "" || isNaN(numUm) || isNaN(numDois) || numDois == 0) {
                    return res.status(400).send(`Caractere inválido, faltante ou tentativa de divisao por 0`);
                };
                resultado = parseFloat(numUm) / parseFloat(numDois);
                break;
            default:
                return res.status(400).send("Operação inválida ou indisponível");
        };

        res.status(200).send(`Resultado: ${resultado.toFixed(2)}`);

    } catch (error) {
        console.error("Erro ao realizar o calculo!" + error);
        res.status(500).send(`Erro interno no servidor!`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando http://localhost:${PORT}`);
});