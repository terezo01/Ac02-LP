const produtos = [];
const qtds = [];

somaEstoque = 0;

function addProduto(){

    const produto = document.getElementById('produto').value;
    const qtd = parseInt(document.getElementById('qtd').value);

    if(qtd === -1 || produto === '-1' ){
        for(let i=0; i<qtds.length; i++){
            somaEstoque += qtds[i];
        }

        document.getElementById('totalProduto'). innerHTML = `Total de produtos: ${produtos.length}`;
        document.getElementById('totalEstoque'). innerHTML = `Total de produtos no estoque: ${somaEstoque}`;
        document.getElementById('maiorEstoque'). innerHTML = `O maior estoque de um único produto: ${Math.max(...qtds)} `;
        return
    }
    else if (produto === '' || isNaN(qtd)){
        alert('Verifique se você não deixou nada em branco');
        return
    }
    
    produtos.push(produto.toLowerCase());
    qtds.push(qtd);

    document.getElementById('produto').value =''
    document.getElementById('qtd').value =''


}

function produtoEspecifico(){
    const searchProduto = document.getElementById('searchProduto').value.toLowerCase();

    if(!produtos.includes(searchProduto)){
        alert('Esse produto não foi encontrado');
        return
    }

    const indexProduto = produtos.indexOf(searchProduto);

    document.getElementById('produtoEspecifico').innerHTML = `Produto: ${searchProduto}<br> Estoque: ${qtds[indexProduto]}`;

    document.getElementById('searchProduto').value = ''

}