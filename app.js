/** Descrição da função:
 * 
 * A função irá gerar valores pseudo-aleatorios através dos dados informados pelo usuário
 * 
 * Parâmetros: Não se aplica.
 * 
 * Retorno: Não há retorno.
 */
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
 * A função gera um número inteiro pseudo-aleatório dentro de um intervalo definido.
 *
 * Parâmetros:
 * 
 * min — Valor mínimo do intervalo (inclusive). Ex: 1, 2, 3...
 * 
 * max — Valor máximo do intervalo (inclusive). Deve ser igual ou maior que "min".
 *
 * Retorno: Um número inteiro entre "min" e "max", incluindo ambos os extremos.
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

/** Descrição da função:
 * 
 * A função irá restaurar os campos e o texto informativo.
 *
 * Parâmetros: Não se aplica.
 *
 * Retorno: Não há retorno.
 */
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<p class="texto__paragrafo">Números sorteados:  nenhum até agora</p>';
    alterarStatusBotao();
}

/** Descrição da função:
 * 
 * A função valida todos os campos necessários para o sorteio e verifica se é possível prosseguir.
 * 
 * Para cada verificação que falhar, exibe o aviso correspondente na tela.
 *
 * Parâmetros: Não se aplica.
 * 
 * Retorno: true se todos os campos estiverem válidos; false caso contrario.
 */
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
 * Retorno: true se válido, false caso contrário
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
/** Descrição da função:
 * 
 * A função irá validar se todos os valores 'quantidade', 'de' e 'ate' são positivos e superior a 0,
 * 
 * Se algum valor for menor ou igual a 0 ele para o sorteio e informa um aviso na tela.
 *
 * Parâmetros: Não se aplica.
 *
 * Retorno: true se válido, false caso contrário
 */
function validarValorInteiroDosCampos() {
    // Atribui os status dos campos:
    // Verifica se cada campo está com valores incompativeis com o sorteio como 0 e negativos, se sim retorna 'true' senão 'false'.
    let valorQuantidadeEhPermitido = document.getElementById('quantidade').value < 1;
    let valorDeEhPermitido  = document.getElementById('de').value < 1;
    let valorAteEhPermitido = document.getElementById('ate').value < 1;

    if (valorQuantidadeEhPermitido) {
        alert('O valor do campo "quantidade" não pode ser 0 ou negativo, insira novamente outro valor.');
        document.getElementById('quantidade').value = '';
        return false;
    }
    if (valorDeEhPermitido) {
        alert('O valor do campo "de" não pode ser 0 ou negativo, insira novamente outro valor.');
        document.getElementById('de').value = '';
        return false;
    }
    if (valorAteEhPermitido) {
        alert('O valor do campo quantidade não pode ser 0 ou negativo, insira novamente outro valor.');
        document.getElementById('ate').value = '';
        return false;
    }

    return true;
}

/** Descrição da função:
 * 
 * A função irá validar se os valores 'de' e 'ate' são informados de forma crescente,
 * 
 * Se do campo "ate" for menor do que o campo "de" ele para o sorteio e informa um aviso na tela.
 *
 * Parâmetros: Não se aplica.
 *
 * Retorno: true se válido, false caso contrário
 */
function validarInversaoDosValores() {
    // Atribui os valores dos campos nas variaveis:
    let valorDoCampoDe  = parseInt(document.getElementById('de').value);
    let valorDoCampoAte = parseInt(document.getElementById('ate').value);
    
    if (valorDoCampoAte < valorDoCampoDe) {
        alert(`O valor no campo "Até" não pode ser menor do que o valor do campo "De". Por favor insira um valor maior do que ${valorDoCampoDe}.`);
        document.getElementById('ate').value = "";
        return false;
    }
    
    return true;
}

/** Descrição da função:
 * 
 * A função irá validar se o intervalo do valores "de" e "ate" é menor ou igual ao da "quantidade",
 * 
 * Se quantidade for maior que o intervalo informado, ele para o sorteio e informa um aviso na tela.
 *
 * Parâmetros: Não se aplica.
 *
 * Retorno: true se válido, false caso contrário
 */
function validarQuantidadeXIntervaloDeSorteio() {
    // Atribui os valores dos campos nas variaveis:
    let valorQuantidade = parseInt(document.getElementById('quantidade').value);
    let valorDoCampoDe  = parseInt(document.getElementById('de').value);
    let valorDoCampoAte = parseInt(document.getElementById('ate').value);
    let intervalo = valorDoCampoAte - valorDoCampoDe + 1;
    
    if (valorQuantidade > intervalo) {
        alert(`O campo quantidade é maior que o intervalo informado.\n`  +
             `Informar a quantidade desejada até ${intervalo},\n` + 
             `Ou informar no campo Até um valor superior.`);
        return false;
    }

    return true;
}