# 🍱 Gordão Marmitas - Atendente Virtual & Vendas com IA (Client-Side)

Aplicação web interativa, responsiva e desenvolvida 100% no padrão **Client-Side (Vanilla HTML5, CSS3 e JavaScript puro)**, sem nenhuma necessidade de backend ou servidor para execução.

🔗 **GitHub Pages:** [https://pedrofernandes123.github.io/Gordao_Marmitas/](https://pedrofernandes123.github.io/Gordao_Marmitas/)  
📂 **Repositório GitHub:** [https://github.com/PedroFernandes123/Gordao_Marmitas](https://github.com/PedroFernandes123/Gordao_Marmitas)

---

## 🌟 Funcionalidades Principais

1. **Vendas Especializadas para Restaurante de Marmitas:**
   - Fluxo completo de pedido: seleção, customização, endereço, pagamento e confirmação.
   
2. **Cardápio Dinâmico com Preços por Unidade & Dias da Semana:**
   - Produtos e valores de Segunda a Sábado com temas culinários e pratos tradicionais brasileiros (Virado à Paulista, Feijoada, Parmegiana, Strogonoff, Churrasco Misto, Peixes, etc.).
   - Bebidas e acompanhamentos disponíveis diariamente.

3. **Seleção de Itens por Linguagem Natural (Texto):**
   - O usuário pode digitar no chat comandos naturais como: *"quero uma marmita de feijoada"*, *"me vê um bife acebolado"*, *"adicione uma coca zero"*.

4. **Personalização Avançada de Temperos e Ponto de Cozimento:**
   - Capacidade de retirar ou alterar ingredientes (ex.: *"remover cebolas do bife de vaca"*, *"sem alho"*, *"pouco sal"*, *"sem pimenta"*, *"ovo com gema mole"*, *"carne bem passada / ao ponto / mal passada"*).

5. **Cálculo Automático do Valor Total com Taxa de Entrega:**
   - Subtotal por unidade + Taxa de Entrega (R$ 6,00) com frete grátis para compras acima de R$ 70,00.
   - Discriminação transparente no chat e no painel lateral.

6. **Camada Robusta de Guardrails de Segurança (Client-Side):**
   - **Prevenção de Desvio de Finalidade:** Bloqueia pedidos para escrever código, resolver cálculos ou equações, escrever redações ou debater temas alheios ao restaurante.
   - **Prevenção de Jailbreak e Prompt Injection:** Filtro de comandos maliciosos conhecidos (`ignore previous instructions`, `DAN`, `developer mode`, `bypass safety`, etc.).
   - **Anti-Vazamento:** Impede a revelação de instruções internas do assistente.
   - **Sanitização contra XSS:** Tratamento seguro de strings e escaping de tags HTML.
   - **Restrição de Domínio:** Bloqueio de assuntos perigosos, tóxicos ou fora do escopo gastronômico.
   - Inclui botão interativo de **"Testar Jailbreak"** no cabeçalho do chatbot para validação em tempo real.

7. **Arquitetura 100% Autônoma sem Chave de API:**
   - **Zero API Key / Zero Custo:** O assistente utiliza motor local de processamento de linguagem natural focado nas vendas de marmitas, cálculo de entregas e customizações de prato.
   - **Zero dependência de servidores ou LLM externa:** Não há risco de indisponibilidade por esgotamento de quota de API ou vazamento de chaves.

8. **Design Acolhedor & Reativo:**
   - Paleta rica em cores quentes (Terracota `#EB5720`, Âmbar, Caramelo e Creme Acolhedor `#FAF6F0`).
   - Barra de Navegação (*Navbar*) reativa com blur backdrop e contador dinâmico de itens.
   - Totalmente responsivo para celulares, tablets e desktops.

---

## 🚀 Como Executar Localmente

Como o projeto é estritamente client-side, você pode:

1. Clonar o repositório:
   ```bash
   git clone https://github.com/PedroFernandes123/Gordao_Marmitas.git
   cd Gordao_Marmitas
   ```
2. Abrir o arquivo `index.html` em qualquer navegador web (Google Chrome, Firefox, Safari, Edge), ou servir através de uma extensão como *Live Server* ou `python3 -m http.server 8080`.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estruturação acessível com meta tags SEO completas.
- **CSS3 Vanilla**: Design system com variáveis CSS, HSL colors, grid, flexbox e animações fluidas.
- **JavaScript Moderno (ES6+)**: Lógica modularizada em camadas (`data.js`, `guardrails.js`, `agent.js` e `app.js`).