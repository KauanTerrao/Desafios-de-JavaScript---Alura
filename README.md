# Sorteador de Números Únicos

## Descrição
Projeto em JavaScript que permite sortear números inteiros únicos dentro de um intervalo definido pelo usuário.  
O sistema realiza **validações completas dos campos** antes do sorteio e garante que os números não se repitam.

---

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript (Vanilla JS)

---

## Como Usar
1. Abra o arquivo `index.html` em um navegador.  
2. Preencha os campos:
   - **Quantidade**: quantidade de números a sortear.
   - **De**: valor mínimo do intervalo.
   - **Até**: valor máximo do intervalo.
3. Clique no botão **Sortear**.  
4. O resultado aparecerá na tela.  
5. Para reiniciar, clique no botão **Reiniciar**.

---

## Exemplo de Uso

Interface inicial do sorteador:

![Sorteador de Números - Tela Inicial](assets/tela-inicial.png)

Após clicar em "Sortear", os números aparecem:

![Sorteador de Números - Resultado](assets/resultado-final.png)

---

## Exemplo de Validações

Se o usuário deixar algum campo vazio:

![Erro - Campo vazio](assets/erro-campo-vazio.png)  
*Mensagem exibida quando um campo obrigatório não é preenchido.*

Se o valor da quantidade for maior que o intervalo:

![Erro - Quantidade maior que intervalo](assets/erro-quantidade-superior-ao-intervalo.png)  
*Mensagem exibida quando a quantidade informada excede o intervalo disponível.*

Se o valor "Até" for menor que "De":

![Erro - Inversão de valores](assets/erro-inversao-de-valores.png)  
*Mensagem exibida quando o valor final do intervalo é menor que o inicial.*

---

## Funcionalidades
- Geração de números inteiros aleatórios **únicos**.  
- Validações de:
  - Campos preenchidos.  
  - Valores positivos (>0).  
  - Ordem correta (`De` ≤ `Até`).  
  - Quantidade menor ou igual ao intervalo.  
- Feedback claro ao usuário via alertas e mensagens na tela.  
- Botão **Reiniciar** que restaura os campos e o resultado.  

---

## Diferenciais
- Código modular e legível, com funções pequenas e isoladas.  
- Docstrings detalhadas em estilo próprio, explicando o comportamento de cada função.  
- Aplicação simplificada de FSM (Finite State Machine) para controlar o processamento apenas quando os dados forem válidados.  

---

## Autor
*Kauan Da Silva Terrão*.  
Projeto desenvolvido como estudo pessoal de JavaScript.