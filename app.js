const express = require("express");
const app = express();
const PORT = 8082;

app.get("/adicao/:numUm/:numDois", (req, res) => {
    try {
        const { numUm, numDois } = req.params;
        if(numUm & numDois == undefined || numUm & numDois == "" || isNaN(numUm, numDois)){
            return res.status(400).send(`Número Inválido`);
        }
        const adicao = parseFloat(numUm) + parseFloat(numDois);
        res.status(200).send(adicao);


    } catch (error) {
        console.error("Erro ao realizar a adicao" + error)
        res.status(500).send(`Erro interno no servidor!`)
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando http://localhost:${PORT}`)
});