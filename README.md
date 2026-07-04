# Eatlooper

Clube de assinatura gastronômica curado. Aracaju, SE.

## Homepage

`index.html` na raiz é a hub de loops — apresenta o Eatlooper (alinhado ao posicionamento do site oficial) e lista os circuitos ativos e em preparação. Não é mais um redirect fixo para um único loop.

## Loops

- **Loop Geração SE** — ativo. Quatro restaurantes em Aracaju conectados pelo Rio Poxim. Tolé · Gratto · Casa do Mangue · Zōi. [`/loops/geracao-se/`](loops/geracao-se/)
- **Do Mar à Mesa** — em preparação. Gratto · Mykonos · Samore.
- **Sinta-se em Casa** — em preparação. Casa do Mangue · Mi Piace · Casa Mitarakis.
- **Croc & Croc** — em preparação. Argo · Espelunca · Blend Burger.

Conforme cada loop novo for finalizado, ele ganha uma página em `/loops/<slug>/` e entra na hub (`index.html`) e no footer.

## Publicação

Este repositório é servido via GitHub Pages a partir da branch `main`.

URL de produção pretendida: `https://eatlooper.com`
URL temporária (Pages): `https://ozannese.github.io/Eatlooper/`

Site institucional oficial (assinatura, app): `https://www.eatlooper.com`

## Estrutura

```
/
├── index.html                    hub — apresentação + lista de loops
├── lisboa/                       apresentação Eatlooper Lisboa (material à parte)
└── loops/
    └── geracao-se/
        ├── index.html            landing pública do loop
        ├── samuel/index.html     convite Gratto
        ├── roberta/index.html    convite Casa do Mangue
        ├── geon/index.html       convite Zōi
        └── yasmin/               convite Tolé Cozinha
```

---

Curadoria: François Ozanne · Conselho Ozanne
