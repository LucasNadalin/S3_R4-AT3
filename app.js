const express = require("express");
const app = express();
const PORT = 8083;

app.get("/calculadora", (req, res) =>{
    try {
        const operacao = req.query.operacao;
        const numUm = parseFloat(req.query.numUm);
        const numDois = parseFloat(req.query.numDois);

        if(numUm & numDois == undefined || numUm & numDois == "" || isNaN(numUm) || isNaN(numDois)){
            return res.status(400).send(`Caractere inválido ou faltante, digite um número!`);
        }

        let resultado;

        // Switch Case
        switch(operacao){
            case "soma":
                resultado = numUm + numDois;
            break;
            case "subtracao":
                resultado = numUm - numDois;
            break;
            case "multiplicacao":
                resultado = numUm * numDois;
            break;
            case "divisao":
                 if (numDois === 0){
                    return res.status(400).send("Não é possível fazer divisão por 0");
                }else{
                    resultado = numUm / numDois;
                };
            break;
            default:
                return res.status(400).send("Operação inválida ou indisponível");
        };

        res.status(200).send(`Resultado: ${resultado.toFixed(2)}`);
        
    } catch (error) {
        console.error("Erro ao realizar o calculo!");
        res.status(500).send(`Erro interno no servidor!`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando http://localhost:${PORT}`);
});