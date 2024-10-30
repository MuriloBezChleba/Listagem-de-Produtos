const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const produtoRoutes = require('./routes/produtoRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo ao Sistema de Produtos!</h1><a href="/produtos/criar">Criar Novo Produto</a>');
});


app.use('/produtos', produtoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
