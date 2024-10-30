let listaProdutos = [];

const addProduto = (req, res) => {
    const { nome, preco, descricao } = req.body;
    const newProduto = { nome, preco, descricao };
    listaProdutos.push(newProduto);
    res.redirect('/produtos/criar'); 
};

module.exports = {
    addProduto,
    listaProdutos,
};
