function sortear() {
    var statusPodeSeguir = validarDados();

    if (statusPodeSeguir) {
        const quantidade = parseInt(document.getElementById('quantidade').value);
        const de = parseInt(document.getElementById('de').value);
        const ate = parseInt(document.getElementById('ate').value);
        const sorteados = [];
        let numero;
        
        for(let i = 0; i < quantidade; i++) {
            do {
                numero = obterNumeroAleatorio(de, ate);
            } while(sorteados.includes(numero));
            
            sorteados.push(numero);
        }

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<p class="texto__paragrafo">Números sorteados: ${sorteados.join(" - ")}</p>`;
        alterarStatusBotao();
    }
}

/** Descrição da função:
 * 
 * Gera um número inteiro pseudo-aleatório dentro de um intervalo definido.
 *
 * Parâmetros:
 * 
 * min — Valor mínimo do intervalo (inclusive). Ex: 1, 2, 3...
 * 
 * max — Valor máximo do intervalo (inclusive). Deve ser igual ou maior que "min".
 *
 * Retorna: Um número inteiro entre "min" e "max", incluindo ambos os extremos.
 */
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Descrição da função:
 * 
 * A função irá alternar a classe de estilos do CSS que está presente no botão "Reiniciar" e se é habilitado ou desabilitado,
 * 
 * Sendo elas as classes: 'container__botao-desabilitado' e 'container__botao'.
 *
 * Parâmetros: Não se aplica.
 *
 * Retorno: Não há retorno.
 */
function alterarStatusBotao() {
    const botao = document.getElementById('btn-reiniciar');
    const desabilitado = botao.classList.contains('container__botao-desabilitado');

    botao.classList.toggle('container__botao-desabilitado');
    botao.classList.toggle('container__botao');
    botao.disabled = !desabilitado;
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<p class="texto__paragrafo">Números sorteados:  nenhum até agora</p>';
    alterarStatusBotao();
}

function validarDados() {
    if (!validarCamposVazios()) return false;
    if (!validarValorInteiroDosCampos()) return false;
    if (!validarInversaoDosValores()) return false;
    if (!validarQuantidadeXIntervaloDeSorteio()) return false;
    return true;
}


/** Descrição da função:
 * 
 * A função irá validar se todos os valores 'quantidade', 'de' e 'ate' foram informados,
 * 
 * Se algum valor não foi informado ele para o sorteio e informa um aviso na tela.
 *
 * Parâmetros: Não se aplica.
 *
 * Retorno: 'true' ou 'false'.
 */
function validarCamposVazios() {
    // Atribui os status dos campos:
    // Verifica se cada campo está vazio, se sim retorna 'true' senão 'false'.
    let statusQuantidadeVazia = document.getElementById('quantidade').value == '';
    let statusCampoDeVazia = document.getElementById('de').value == '';
    let statusCampoAteVazia = document.getElementById('ate').value == '';

    if (statusQuantidadeVazia) {
        document.getElementById('resultado').innerHTML = '<p class="texto__paragrafo">Atenção: Favor informar a quantidade</p>';
        return false;
    }
    if (statusCampoDeVazia) {
        document.getElementById('resultado').innerHTML = '<p class="texto__paragrafo">Atenção: Favor informar o valor inicial</p>';
        return false;
    }
    if (statusCampoAteVazia) {
        document.getElementById('resultado').innerHTML = '<p class="texto__paragrafo">Atenção: Favor informar o valor final</p>';
        return false;
    }

    return true;
}

function validarValorInteiroDosCampos() {
    // Atribui os status dos campos:
    // Verifica se cada campo está com valores incompativeis com o sorteio como 0 e negativos, se sim retorna 'true' senão 'false'.
    let valorQuantidadeEhInteiro = document.getElementById('quantidade').value < 1;
    let valorDeEhInteiro = document.getElementById('de').value < 1;
    let valorAteEhInteiro = document.getElementById('ate').value < 1;

    if (valorQuantidadeEhInteiro) {
        alert('O valor do campo "quantidade" não pode ser 0 ou negativo, insira novamente outro valor.');
        document.getElementById('quantidade').value = '';
        return false;
    }
    if (valorDeEhInteiro) {
        alert('O valor do campo "de" não pode ser 0 ou negativo, insira novamente outro valor.');
        document.getElementById('de').value = '';
        return false;
    }
    if (valorAteEhInteiro) {
        alert('O valor do campo quantidade não pode ser 0 ou negativo, insira novamente outro valor.');
        document.getElementById('ate').value = '';
        return false;
    }

    return true;
}

function validarInversaoDosValores() {
    let valorDoCampoDe  = parseInt(document.getElementById('de').value);
    let valorDoCampoAte = parseInt(document.getElementById('ate').value);
    
    if (valorDoCampoAte < valorDoCampoDe) {
        alert(`O valor no campo "Até" não pode ser menor do que o valor do campo "De". Por favor insira um valor maior do que ${valorDoCampoDe}.`);
        document.getElementById('ate').value = "";
        return false;
    }
    
    return true;
}

function validarQuantidadeXIntervaloDeSorteio() {
    let valorQuantidade = parseInt(document.getElementById('quantidade').value);
    let valorDoCampoDe  = parseInt(document.getElementById('de').value);
    let valorDoCampoAte = parseInt(document.getElementById('ate').value);
    let intervalo = valorDoCampoAte - valorDoCampoDe + 1;
    
    if (valorQuantidade > intervalo) {
        alert(`O campo quantidade é maior que o intervalo informado.\n`  +
             `Informar a quantidade desejada inferior á ${intervalo},\n` + 
             `Ou informar no campo Até um valor superior.`);
        return false;
    }

    return true;
}