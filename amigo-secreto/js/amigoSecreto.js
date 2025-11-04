let listaDeNomes = [];


function adicionar() {
    let nomeDoAmigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    
    if (nomeDoAmigo.value.trim() === "") {
        alert('Por favor, insira um nome válido.');
        return; // evita adicionar vazio
    }
    
    if (listaDeNomes.includes(nomeDoAmigo.value)) {
        alert('Nome já existe na lista!');
        return;
    } else {
        listaDeNomes.push(nomeDoAmigo.value);
        nomeDoAmigo.value = ""; // limpa o campo após adicionar
    }

    listaAmigos.innerText = listaDeNomes.join(" - ");
}

 function reiniciar() {
    let listaAmigos = document.getElementById('lista-amigos');
    let listaResultado = document.getElementById('lista-sorteio');
    listaDeNomes.length = 0;
    listaAmigos.innerText = listaDeNomes;
    listaResultado.innerText = listaDeNomes;
 }

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

function sortear() {
    let nomeDoAmigo = document.getElementById('nome-amigo');

    if (listaDeNomes.length < 3) {
        alert('Adicione pelo menos três nomes para sortear!');
        return;
    }

    let sorteados = [...listaDeNomes];
    embaralhar(sorteados);
    let resultado = '';
    for (let i = 0; i < sorteados.length; i++) {
        let amigo = sorteados[i];
        let amigoSecreto = sorteados[(i + 1) % sorteados.length];
        resultado += amigo + ' - ' + amigoSecreto + '\n';
    }
    document.getElementById('lista-sorteio').innerText = resultado;
}