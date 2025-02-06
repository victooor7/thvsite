
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configura a pasta pública para servir os arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Define uma rota para o arquivo principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

