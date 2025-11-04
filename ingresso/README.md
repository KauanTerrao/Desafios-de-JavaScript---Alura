# 🎟️ Sistema de Compra de Ingressos

---

### Este projeto é uma página HTML com JavaScript que simula a compra de ingressos para um evento. Ele permite ao usuário selecionar o tipo de ingresso desejado, informar a quantidade e verificar se há disponibilidade. Caso haja, a quantidade é atualizada dinamicamente na interface.

---

## 🧩 Funcionalidades implementadas

- ✅ **Seleção de tipo de ingresso** (Pista, Cadeira Superior, Cadeira Inferior)  
- ✅ **Entrada de quantidade** pelo usuário  
- ✅ **Validação da quantidade** (não aceita valores vazios, negativos ou não numéricos)  
- ✅ **Decremento da disponibilidade** do ingresso em tempo real  
- ✅ **Atualização dinâmica** do número de ingressos restantes na página  
- ✅ **Alertas automáticos** caso a quantidade seja inválida ou ultrapasse a disponibilidade  

---

## 🧠 Lógica do Código

### A função principal `comprar()` realiza as seguintes etapas:

-  Coleta os dados dos campos quantidade e tipo-ingresso
-  Valida se a quantidade é um número válido e maior que zero
-  Verifica se o tipo de ingresso existe no dicionário ingressos
-  Compara a quantidade solicitada com a disponibilidade
-  Atualiza a disponibilidade ou exibe um alerta de erro

---

## 🛠️ Tecnologias Utilizadas

- 📄 **HTML**
- 🟨 **JavaScript (puro)**
- 🧱 **VS Code**
- 🎨 **CSS**

---

## 📦 Como Usar

- Abra o arquivo `index.html` em seu navegador;
- Escolha o tipo de ingresso, a quantidade no campo e clique em "**Comprar**".

---

## 📸 Exemplos de Execução

![Página inicial](assets/prints/pagina-inicial.png)
*Tela inicial do programa.*

![Compra de ingressos](assets/prints/compra-realizada.png)
*Tela após a compra dos ingressos.*

![Validação 1](assets/prints/validacao-de-disponibilidade.png)
*Validação: Ingressos insuficientes.*

![Validação 2](assets/prints/validacao-de-quantidade-invalida.png)
*Validação: Quantidade solicitada inválida (0, `NaN` ou `n < 0`)*

---

## ✏️ Autor

**Kauan da S. Terrão**
[Meu GitHub](https://github.com/KauanTerrao)