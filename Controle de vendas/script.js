const vendas = [];

somaVendas = 0;

function submitValue(){
    const num = parseFloat(document.getElementById('num').value);


    if(num === -1){
        for(i=0; i < vendas.length; i++ ){
            somaVendas += vendas[i] ;
        }

        document.getElementById('maxPrice').innerHTML = `O valor da venda mais cara foi R$${Math.max(...vendas)}`;
        document.getElementById('minPrice').innerHTML = `O valor da venda mais barata foi R$${Math.min(...vendas)}`;
        document.getElementById('medPrice').innerHTML = `O valor médio de vendas é de R$${somaVendas/(vendas.length)}`;
        document.getElementById('qtdVendas').innerHTML = `A quantidade de vendas é de ${vendas.length}`;
        return
    } 

    vendas.push(num);
    
    document.getElementById('num').value = '';


}