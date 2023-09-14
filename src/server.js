// Importar o pacote express
const express = require('express');

//Instanciar o express ma variavel app
const app = express();

//Recuperar pacote dotenv
const dotenv = require('dotenv').config();

//Importando variavel do arquivo .env
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
