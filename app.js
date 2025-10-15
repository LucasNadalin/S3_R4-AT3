const express = require("express");
const app = express();
const PORT = 8082;

app.get("/:operacao/:numUm/:numDois", (req, res) => {
    try {
        const{operacao, numUm, numDois} = req.params;

        const n1 = parseFloat(numUm);
        const n2 = parseFloat(numDois);

        if(numUm & numDois == undefined || numUm & numDois == "" || isNaN(n1) || isNaN(n2)){
            return res.status(400).send(`Caractere inválido ou faltante, digite um número!`);
        }

        let resultado

        //Switch Case
        switch(operacao){
            case "adicao":
                resultado = n1 + n2;
            break;
            case "subtracao":
                resultado = n1 - n2;
            break;
            case "multiplicacao":
                resultado = n1 * n2;
            break;
            case "divisao":
                if (n2 === 0){
                    return res.status(400).send("Não é possível fazer divisão por 0");
                }else{
                    resultado = n1 / n2;
                }
            break;
            default:
                return res.status(400).send("Operação inválida ou indisponível");
        }

        res.status(200).send(`Resultado: ${resultado.toFixed(2)}`);


    } catch (error) {
        console.error("Erro ao realizar o calculo!")
        res.status(500).send(`Erro interno no servidor!`)
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando http://localhost:${PORT}`)
});