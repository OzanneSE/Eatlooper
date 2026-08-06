# Persistência das fichas — instalação em 15 minutos

O GitHub Pages é estático: a página não consegue escrever sozinha num arquivo do
repositório. Para que a alteração que a casa fizer chegue até a matriz sem você
copiar nada à mão, usamos um Google Apps Script gratuito na frente de uma planilha.

Enquanto isso não estiver instalado, **as páginas já funcionam**: a edição fica
salva no navegador da casa e o botão *Enviar alterações* baixa um JSON e abre o
WhatsApp com o resumo.

## 1. Crie a planilha

Nova planilha no Google Sheets, nome sugerido `Eatlooper — Matriz de Fichas`.
Copie o ID da URL:

```
https://docs.google.com/spreadsheets/d/ESTE_PEDAÇO_AQUI/edit
```

## 2. Cole o script

Na planilha: **Extensões → Apps Script**. Apague o que estiver lá e cole o
conteúdo de `apps-script.gs`. Troque `COLE_AQUI_O_ID_DA_PLANILHA` pelo ID do
passo 1. Salve.

## 3. Publique como Web App

**Implantar → Nova implantação → Tipo: App da Web**

- Executar como: **Eu**
- Quem pode acessar: **Qualquer pessoa**

Autorize quando o Google pedir (vai aparecer um aviso de "app não verificado" —
é o seu próprio script, siga em *Avançado → Ir para o projeto*).

Copie a URL gerada. Ela termina em `/exec`.

## 4. Cole a URL nas páginas

Em cada `casas/<slug>/index.html`, no bloco `// ===== CONFIG =====`:

```js
const ENDPOINT = "https://script.google.com/macros/s/AKfy.../exec";
const WHATSAPP = "5579XXXXXXXXX";
```

Commit e pronto.

## O que acontece a partir daí

Quando a casa clica em **Enviar alterações**:

- a aba **RECEBIDOS** ganha uma linha com data, casa, custo, CMV, as respostas
  das cinco decisões e o JSON inteiro — é o seu histórico, nada se perde;
- a aba **MATRIZ** é reescrita para aquela casa, ingrediente por ingrediente,
  com a gramatura e o preço que a casa informou. **É esta aba que vira a nova
  versão da matriz.**

## Limites, ditos com honestidade

- **Não tem senha.** Qualquer um com o link pode enviar. Para nove restaurantes
  é aceitável; se virar problema, dá para exigir um código simples na URL.
- **O envio é cego** (`mode:'no-cors'`): o navegador não consegue ler a resposta
  do Google, então a página diz "enviado" sem confirmar de fato. Confira na
  planilha nas primeiras vezes.
- **A matriz do repositório continua sendo a de referência.** A planilha é a
  caixa de entrada; quem decide o que vira versão oficial é você.
