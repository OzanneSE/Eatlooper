# Eatlooper

Clube de assinatura gastronômica curado. Aracaju, SE.

Assinatura mensal, **0% de comissão** — o assinante paga direto na casa. Cada loop é um
circuito de restaurantes que contam a mesma história sem competir entre si, e cada casa
serve um **menu de três tempos**: *Cheguei · À mesa · Fica mais um pouco*.

Este repositório é servido por **GitHub Pages** a partir da branch `main`.

- Pages: `https://ozannese.github.io/Eatlooper/`
- Domínio pretendido: `https://eatlooper.com`
- Site institucional (assinatura, app): `https://www.eatlooper.com`

---

## O que tem aqui

| Pasta | O que é | Para quem |
|---|---|---|
| `index.html` | Hub — conceito + loops ativos | público |
| `loops/` | Uma página por circuito, identidade visual própria | público |
| `casas/` | Uma página por restaurante: menu, ficha técnica editável, calculadora e modo de preparo | **só o chef da casa**, por link direto |
| `backend/` | Apps Script que recebe as fichas editadas e grava na planilha matriz | interno |
| `Gerador_Fichas_..._v4.html` | Ferramenta de fichas do portfólio inteiro, offline, com catálogo de insumos | interno |
| `lisboa/` | Apresentação Eatlooper Lisboa | material à parte |

---

## Loops

**Temporada zero, roster da v7 do cardápio (03/08/2026).**

| Loop | Casas | Pasta |
|---|---|---|
| **Do Mar à Mesa** | Gratto · Mykonos · Samore | [`/loops/do-mar-a-mesa/`](loops/do-mar-a-mesa/) |
| **Amor à Primeira Garfada** | Di Vino · Mi Piace · Casa Mitarakis | [`/loops/sinta-se-em-casa/`](loops/sinta-se-em-casa/) ⚠ |
| **Croc & Croc** | Espelunca *(âncora)* · Argo · Blend Burger | [`/loops/croc-e-croc/`](loops/croc-e-croc/) |

⚠ **O nome da pasta está defasado.** O loop chamava-se *Sinta-se em Casa* e tinha a Casa do
Mangue; virou **Amor à Primeira Garfada** e a Casa do Mangue saiu, entrando o **Di Vino**.
A pasta continua `sinta-se-em-casa` para não quebrar links que já circularam — renomear
exige atualizar o `index.html` da raiz junto.

Duas outras mudanças da v7 que valem registro: o **Samore subiu** do circuito de massas para
o Do Mar à Mesa (o fio condutor virou o camarão, em três sotaques), e o **Di Vino desceu**
do Mar à Mesa para o circuito de casal.

Cada loop tem paleta e tipografia próprias ("storytelling v2"), diferentes da hub. Contato do
curador no rodapé de cada página.

O **Geração SE** (primeira versão, Aracaju/Rio Poxim) foi encerrado. O material continua em
`/loops/geracao-se/` como arquivo histórico, mas não é linkado a partir da raiz.

---

## Páginas das casas

Novidade de 06/08/2026. Uma página por restaurante, pensada para o chef abrir no celular e
responder ali mesmo.

Cada página traz, nesta ordem:

1. **Cinco decisões** que precisam ser tomadas antes de qualquer outra coisa
2. **Os três tempos**, com ficha técnica de **gramatura e preço editáveis** — o CMV recalcula ao vivo e muda de cor conforme sai da régua de 28–32%
3. **Modo de preparo já escrito**, em campo de texto, para o chef apenas personalizar
4. **Como o circuito funciona** — preço de assinante, garantia de uso, autoria da casa, treino antes de abrir

E três botões: **Exportar em DOC**, **Baixar JSON** e **Enviar alterações**.

| Casa | Loop | Menu | CMV | Link |
|---|---|---|---|---|
| Gratto | Do Mar à Mesa | R$ 110,00 | 30,1% | [`/casas/gratto/`](casas/gratto/) |
| Mykonos | Do Mar à Mesa | R$ 129,90 | 29,1% | [`/casas/mykonos/`](casas/mykonos/) |
| Samore | Do Mar à Mesa | R$ 119,90 | 28,3% | [`/casas/samore/`](casas/samore/) |
| Espelunca | Croc & Croc | R$ 69,00 | 21,2% | [`/casas/espelunca/`](casas/espelunca/) |
| Di Vino | Amor à Primeira Garfada | R$ 149,90 | 30,1% | [`/casas/di-vino/`](casas/di-vino/) |

O índice interno fica em [`/casas/`](casas/). **Não linkar da home** enquanto o lançamento
for às cegas — o link vai direto para o chef, por WhatsApp.

Mi Piace, Casa Mitarakis, Argo e Blend Burger têm ficha pronta no arquivo matriz, mas ainda
não têm página: entram quando destravarem.

> A Espelunca fica abaixo da régua (21,2%) por decisão, não por erro: é a única casa cuja
> ficha foi fechada pela própria cozinha. A folga volta para o prato como valor à mesa.

---

## Persistência das fichas

GitHub Pages é estático — a página não escreve sozinha num arquivo daqui. O caminho montado:

1. O chef edita. Tudo fica salvo no **navegador dele** (`localStorage`), mesmo que feche a aba.
2. Ao clicar em **Enviar alterações**, a página faz POST num **Google Apps Script**.
3. O script grava em duas abas de uma planilha: `RECEBIDOS` (histórico completo, um envio por
   linha) e `MATRIZ` (a última versão de cada casa, ingrediente por ingrediente).

Instalação em `backend/COMO_INSTALAR.md`. Enquanto o `ENDPOINT` estiver vazio nas páginas, o
botão baixa o JSON e abre o WhatsApp com o resumo — **funciona sem instalar nada**.

A planilha é caixa de entrada, não fonte da verdade. Quem decide o que vira versão oficial
continua sendo a curadoria.

---

## Identidade visual

| | Valor | Onde |
|---|---|---|
| Bordô | `#B51D27` | **cor real**, extraída do arquivo do logo |
| Bege | `#FDF6EE` | fundo |
| Dark | `#1A1A1A` | texto — nunca preto puro |
| Títulos | Cormorant Garamond | |
| Corpo e UI | Outfit | |

⚠ **Três vermelhos ainda convivem no projeto:** `#B51D27` (real, do logo), `#D42B2B`
(documentado em materiais antigos, inclusive na versão anterior deste README) e `#D12B36`
(usado em material recente). **O `#B51D27` é o que vale** — é o único extraído de arquivo,
e é o que as páginas de casa usam. A hub e as páginas de loop ainda precisam ser
reconciliadas.

O wordmark é arte desenhada à mão — **nunca recriar em fonte**.

---

## Estrutura

```
/
├── index.html                          hub — conceito + loops ativos
├── README.md
├── .nojekyll                           desliga o Jekyll; não remover
├── Gerador_Fichas_..._20260722_v4.html ferramenta de fichas (interno)
├── casas/                              ⟵ NOVO · uma página por restaurante
│   ├── index.html                      índice interno, não linkar da home
│   ├── gratto/index.html
│   ├── mykonos/index.html
│   ├── samore/index.html
│   ├── espelunca/index.html
│   └── di-vino/index.html
├── backend/                            ⟵ NOVO · persistência
│   ├── apps-script.gs
│   └── COMO_INSTALAR.md
├── lisboa/                             apresentação Eatlooper Lisboa
└── loops/
    ├── do-mar-a-mesa/index.html        ativo
    ├── sinta-se-em-casa/index.html     ativo — hoje "Amor à Primeira Garfada"
    ├── croc-e-croc/index.html          ativo
    └── geracao-se/                     encerrado, não linkado
        ├── index.html
        └── samuel/ roberta/ geon/ yasmin/    convites (arquivo histórico)
```

---

## Pendências do repositório

- [ ] **Apagar o arquivo `calculadora`** na raiz — não tem extensão e contém `ahsmk`. Commit acidental.
- [ ] **Reconciliar o vermelho** (`#D42B2B` → `#B51D27`) na hub e nas três páginas de loop.
- [ ] **Atualizar a hub** com o nome novo do segundo loop e com o Di Vino no lugar da Casa do Mangue.
- [ ] Decidir se a pasta `sinta-se-em-casa` é renomeada ou fica como está.
- [ ] Publicar o Apps Script e preencher o `ENDPOINT` nas cinco páginas de casa.
- [ ] Páginas de Mi Piace, Mitarakis, Argo e Blend quando cada uma destravar.
- [ ] Apontar o domínio `eatlooper.com` para o Pages.

---

Curadoria: **François Ozanne** · Chef Curador · Conselho Ozanne
[fran.ozanne@gmail.com](mailto:fran.ozanne@gmail.com)
