/** Descrição da função:
 * 
 * A função irá gerar valores pseudo-aleatorios através dos dados informados pelo usuário
 * 
 * PARÂMETROS: Não se aplica.
 * 
 * RETORNO: Não há RETORNO.
 */
function sortear() {
    const statusPodeSeguir = validarDados();

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

        exibirMensagem('texto__paragrafo', `Números sorteados: ${sorteados.join(" - ")}`);
        alterarStatusBotao();
    }
}

/** Descrição da função:
 * 
 * A função gera um número inteiro pseudo-aleatório dentro de um intervalo definido.
 *
 * PARÂMETROS:
 * 
 * @param {number} min - Valor mínimo do intervalo (inclusive). Ex: 1, 2, 3...
 * 
 * @param {number} max Valor máximo do intervalo (inclusive). Deve ser >= que "min".
 *
 * @returns {number} Um número inteiro entre "min" e "max", incluindo ambos os extremos.
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
 * PARÂMETROS: Não se aplica.
 *
 * RETORNO: Não há retorno.
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
 * PARÂMETROS: Não se aplica.
 *
 * RETORNO: Não há retorno.
 */
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    exibirMensagem('texto__paragrafo', 'Números sorteados:  nenhum até agora');
    alterarStatusBotao();
}

/** Descrição da função:
 * 
 * A função valida todos os campos necessários para o sorteio e verifica se é possível prosseguir.
 * 
 * Para cada verificação que falhar, exibe o aviso correspondente na tela.
 *  
 * @returns {boolean} true se todos os campos estiverem válidos; false caso contrario.
 */
function validarDados() {
    return  validarCamposVazios() &&
            validarValorInteiroDosCampos() &&
            validarInversaoDosValores() &&
            validarQuantidadeXIntervaloDeSorteio();
}

/** Descrição da função:
 * 
 * A função irá validar se todos os valores 'quantidade', 'de' e 'ate' foram informados,
 * 
 * Se algum valor não for informado ele irá parar o sorteio e informar um aviso na tela.
 *
 * @returns {boolean} true se válido, false caso contrário
 */
function validarCamposVazios() {
    // Atribui os status dos campos:
    // Verifica se cada campo está vazio, se sim retorna 'true' senão 'false'.
    let statusQuantidadeVazia = document.getElementById('quantidade').value == '';
    let statusCampoDeVazia = document.getElementById('de').value == '';
    let statusCampoAteVazia = document.getElementById('ate').value == '';

    if (statusQuantidadeVazia) {
        exibirMensagem('erro', 'Atenção: Favor informar a quantidade');
        return false;
    }
    if (statusCampoDeVazia) {
        exibirMensagem('erro', 'Atenção: Favor informar o valor inicial');
        return false;
    }
    if (statusCampoAteVazia) {
        exibirMensagem('erro', 'Atenção: Favor informar o valor final');
        return false;
    }

    return true;
}

/** Descrição da função:
 * 
 * A função irá validar se todos os valores 'quantidade', 'de' e 'ate' são positivos e superior a 0,
 * 
 * Se algum valor for menor ou igual a 0 ele irá parar o sorteio e informar um aviso na tela.
 *
 * @returns {boolean} true se válido, false caso contrário
 */
function validarValorInteiroDosCampos() {
    // Atribui os status dos campos:
    // Verifica se cada campo está com valores incompativeis com o sorteio como 0 e negativos, se sim retorna 'true' senão 'false'.
    let valorQuantidadeEhPermitido = document.getElementById('quantidade').value < 1;
    let valorDeEhPermitido  = document.getElementById('de').value < 1;
    let valorAteEhPermitido = document.getElementById('ate').value < 1;

    if (valorQuantidadeEhPermitido) {
        exibirMensagem('erro', 'O valor do campo "Quantidade de números" não pode ser 0 ou negativo, insira novamente outro valor');
        document.getElementById('quantidade').value = '';
        return false;
    }
    if (valorDeEhPermitido) {
        exibirMensagem('erro','O valor do campo "Do número" não pode ser 0 ou negativo, insira novamente outro valor.');
        document.getElementById('de').value = '';
        return false;
    }
    if (valorAteEhPermitido) {
        exibirMensagem('erro', 'O valor do campo "Até o número" não pode ser 0 ou negativo, insira novamente outro valor.');
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
 * @returns {boolean} true se válido, false caso contrário
 */
function validarInversaoDosValores() {
    // Atribui os valores dos campos nas variaveis:
    let valorDoCampoDe  = parseInt(document.getElementById('de').value);
    let valorDoCampoAte = parseInt(document.getElementById('ate').value);
    
    if (valorDoCampoAte < valorDoCampoDe) {
        exibirMensagem('erro', `O valor no campo "Até o número" não pode ser menor do que o valor do campo "Do número". Por favor insira um valor maior do que ${valorDoCampoDe}.`);
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
 * @returns {boolean} true se válido, false caso contrário
 */
function validarQuantidadeXIntervaloDeSorteio() {
    // Atribui os valores dos campos nas variaveis:
    let valorQuantidade = parseInt(document.getElementById('quantidade').value);
    let valorDoCampoDe  = parseInt(document.getElementById('de').value);
    let valorDoCampoAte = parseInt(document.getElementById('ate').value);
    let intervalo = valorDoCampoAte - valorDoCampoDe + 1;
    
    if (valorQuantidade > intervalo) {
        exibirMensagem('erro', `A quantidade excede o intervalo permitido. Informe até ${intervalo} ou aumente o valor do campo "Até o número".`);
        return false;
    }

    return true;
}

/** Descrição da função:
 * 
 * Altera o conteúdo textual e a classe CSS de um elemento HTML.
 * 
 * PARÂMETROS:
 *
 * @param {string} classe Classe CSS que será aplicada ao elemento.
 * @param {string} texto Mensagem que será exibida ao usuário.
 * @returns {void} Não há retorno.
 */
function exibirMensagem(classe, texto) {
    const campo = document.getElementById('resultado');
    campo.textContent = texto;
    campo.className = classe;
}