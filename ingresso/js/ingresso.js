// Dicionário para armazenar informações dos ingressos
let ingressos = {
    "inferior" : {disponibilidade: 400, id: "qtd-inferior", nome: "Cadeira inferior"},
    "superior" : {disponibilidade: 200, id: "qtd-superior", nome: "Cadeira superior"},
    "pista"    : {disponibilidade: 100, id: "qtd-pista"   , nome: "Pista"}
};
/** Descrição da função:
 * 
 * A função irá coletar os dados dos campos 'quantidade' e 'ingressoEscolhido' e irá validar se a quantidade solicitada está disponível para o tipo de ingresso escolhido.
 * 
 * Se a quantidade solicitada for menor ou igual à disponibilidade do ingresso escolhido, a função irá atualizar a disponibilidade subtraindo a quantidade comprada.
 * Caso contrário, exibirá um alerta informando que a quantidade solicitada não está disponível.
 * 
 * Validações:
 * - Verifica se a quantidade é um número válido e maior que zero.
 * - Verifica se o ingresso escolhido existe no dicionário de ingressos.
 * 
 * @param - Não se aplica
 * @returns - Não há retorno
 */
function comprar() {
    const quantidade = parseInt(document.getElementById('qtd').value);
    const ingressoEscolhido = document.getElementById('tipo-ingresso').value;
    const ingresso = ingressos[ingressoEscolhido];
    // Valida se a quantidade é um número válido e maior que zero
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Digite uma quantidade valida!');
        return;
    }
    // Valida se o ingresso escolhido existe no dicionário
    if (!ingresso) return;
    // Verifica a disponibilidade e atualiza se possível
    if (ingresso.disponibilidade >= quantidade) {
        ingresso.disponibilidade -= quantidade;
        document.getElementById(ingresso.id).innerText = ingresso.disponibilidade;
    } else {
        alert(`Quantidade indisponivel para ${ingresso.nome}`);
        return;
    }
}   