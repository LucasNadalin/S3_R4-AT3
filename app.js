const express = require("express");
const app = express();
const PORT = 8083;

app.get("/calculadora", (req, res) =>{
    try {
        const operacao = req.query.operacao;
        const {numUm, numDois} = req.query;

        if (numUm == undefined || numUm == "" || numDois == undefined || numDois == "" || isNaN(numUm) || isNaN(numDois) || numDois == 0) {
            return res.status(400).send(`Caractere inválido, faltante ou tentativa de divisao por 0`);
        };

        // Switch Case
        switch(operacao){
            case "soma":
                resultado = parseFloat(numUm) + parseFloat(numDois);
            break;
            case "subtracao":
                resultado = parseFloat(numUm) - parseFloat(numDois);
            break;
            case "multiplicacao":
                resultado = parseFloat(numUm) * parseFloat(numDois);
            break;
            case "divisao":
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