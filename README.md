# Eatlooper

Clube de assinatura gastronômica curado. Aracaju, SE.

## Homepage

`index.html` na raiz é a hub de loops, no padrão visual oficial do Eatlooper (vermelho `#D42B2B` / bege `#FDF6EE` / dark `#1A1A1A`, Cormorant Garamond + Outfit) — o mesmo sistema usado nos materiais institucionais (apresentações, relatórios). Apresenta o conceito de loop e lista os circuitos em preparação.

## Loops

- **Do Mar à Mesa** — em preparação. Gratto · Mykonos · Samore.
- **Sinta-se em Casa** — em preparação. Casa do Mangue · Mi Piace · Casa Mitarakis.
- **Croc & Croc** — em preparação. Argo · Espelunca · Blend Burger.

Conforme cada loop for finalizado, ele ganha uma página em `/loops/<slug>/` e entra na hub (`index.html`).

Loop Geração SE (primeira versão, Aracaju/Rio Poxim) foi encerrado e removido da homepage. O material antigo continua em `/loops/geracao-se/` mas não é mais linkado a partir da raiz.

## Publicação

Este repositório é servido via GitHub Pages a partir da branch `main`.

URL de produção pretendida: `https://eatlooper.com`
URL temporária (Pages): `https://ozannese.github.io/Eatlooper/`

Site institucional oficial (assinatura, app): `https://www.eatlooper.com`

## Estrutura

```
/
├── index.html                    hub — conceito + loops em preparação
├── lisboa/                       apresentação Eatlooper Lisboa (material à parte)
└── loops/
    └── geracao-se/                encerrado, não linkado na home
        ├── index.html
        ├── samuel/, roberta/, geon/, yasmin/   convites (arquivo histórico)
```

---

Curadoria: François Ozanne · Conselho Ozanne
