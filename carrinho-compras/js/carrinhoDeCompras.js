let totalAcumulado = 0;

function adicionar() {
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade");
    const carrinho = document.getElementById("lista-produtos");
    let valorTotal;

    let itens = {
        "Fone de ouvido - R$100" : {nome: "Fone de ouvido", valorUnitario: 100},
        "Celular - R$1400"       : {nome: "Celular", valorUnitario: 1400},
        "Oculus VR - R$5000"     : {nome: "Oculus VR", valorUnitario: 5000}
    };

    if (itens[produto]) {
        let { nome, valorUnitario } = itens[produto];
        valorTotal = valorUnitario * quantidade.value;
        adicionarProdutos(nome, quantidade.value, valorTotal.toFixed(2));
    }
    let totalDaCompra = document.getElementById("valor-total");
    totalAcumulado += valorTotal;    
    totalDaCompra.textContent = `R$${totalAcumulado.toFixed(2)}`;


    function adicionarProdutos(produto, quantidade, valor) {
        carrinho.insertAdjacentHTML('beforeend', `
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${valor}</span>
            </section>
        `);
    }

    quantidade.value = "";
}

function limpar() {
    alert("Carrinho limpo com sucesso!");
    const quantidade = document.getElementById("quantidade").value = "";
    const campo = document.getElementById("lista-produtos").innerHTML = "";
    const total = document.getElementById("valor-total").innerHTML = "R$0.00";
    totalAcumulado = 0;
}
