# CLAUDE.md

## Visão Geral do Projeto

**Nome:** claude-docs
**Descrição:** Documentação de usabilidade do Claude Code — guia interativo para otimizar performance, reduzir tokens e economizar custos ao usar o Claude Code.
**Origem:** Exportado do Figma (Make by Figma).

## Stack Principal

- **Framework:** React 18 com TypeScript
- **Build tool:** Vite 6
- **Estilização:** Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Componentes UI:** shadcn/ui (Radix UI + `class-variance-authority` + `tailwind-merge`)
- **Ícones:** Lucide React
- **Roteamento:** React Router v7
- **Animações:** Motion (Framer Motion v12)
- **Fonte:** Inter (Google Fonts)

## Estrutura de Pastas

```
claude-docs/
├── src/
│   ├── main.tsx                        # Entry point
│   ├── app/
│   │   ├── App.tsx                     # Componente raiz com tabs de navegação
│   │   └── components/
│   │       ├── StructureTab.tsx        # Tab "Estrutura" (CLAUDE.md, agents, skills)
│   │       ├── figma/
│   │       │   └── ImageWithFallback.tsx
│   │       └── ui/                     # Componentes shadcn/ui (não modificar diretamente)
│   └── styles/
│       ├── index.css                   # CSS global
│       ├── tailwind.css                # Diretivas Tailwind
│       ├── theme.css                   # Tokens de tema (CSS custom properties)
│       └── fonts.css                   # Importação de fontes
├── guidelines/
│   └── Guidelines.md                   # Diretrizes do projeto (para o Figma Make)
├── index.html
├── vite.config.ts
└── package.json
```

## Comandos

```bash
npm i          # Instalar dependências
npm run dev    # Iniciar servidor de desenvolvimento
npm run build  # Build de produção
```

## Convenções de Código

- **Componentes:** Functional components com TypeScript; props sempre tipadas com `interface`
- **Nomenclatura de arquivos:** PascalCase para componentes (ex: `StructureTab.tsx`), kebab-case para utilitários
- **Nomenclatura de componentes:** PascalCase (ex: `StructureTab`, `QuickWin`)
- **Estilos:** Tailwind CSS exclusivamente; sem CSS inline, sem CSS modules
- **Alias de import:** `@` aponta para `./src` (configurado no `vite.config.ts`)
- **Exports:** Named exports para componentes auxiliares; default export apenas para o componente de página principal (`App.tsx`)
- **Componentes helper:** Definidos no mesmo arquivo do componente pai quando são exclusivos dele

## Arquitetura da Aplicação

O app é uma SPA com tabs de navegação. A estrutura de tabs em `App.tsx`:

| Tab | Valor | Conteúdo |
|-----|-------|----------|
| Visão Geral | `overview` | Princípios fundamentais + Quick Wins |
| Prompts | `prompts` | Exemplos bons/ruins + template |
| Contexto | `context` | Estratégias de gestão de contexto |
| Estrutura | `structure` | `<StructureTab />` — CLAUDE.md, agents, skills |
| Avançado | `advanced` | Técnicas avançadas + dicas pro |

## Componentes UI (shadcn/ui)

Os componentes em `src/app/components/ui/` são da biblioteca shadcn/ui e **não devem ser modificados diretamente**. Para customizações, use as props `className` ou crie wrappers.

Componentes disponíveis: `Card`, `Tabs`, `Badge`, `Separator`, `Button`, `Dialog`, `Sheet`, `Accordion`, `Select`, `Tooltip`, entre outros.

## Design System

**Localização:** `/Users/caio_mizuno/Trabalho/MizunoTech/Claude Docs Design System`

### Paleta de Cores

- **Brand (purple):** `purple-50`, `purple-100`, `purple-200`, `purple-600`, `purple-700` — cor primária, ícones ativos, CTAs
- **Neutral (slate):** `slate-50` (background), `slate-100-900` (texto, bordas, superfícies)
- **Success (green):** `green-50`, `green-200`, `green-400`, `green-600`, `green-700` — métricas positivas, quick wins
- **Info (blue):** `blue-50`, `blue-100`, `blue-200`, `blue-600`, `blue-700` — estratégias, info callouts
- **Warning (yellow/amber):** `yellow-50`, `yellow-200`, `yellow-600`, `yellow-700`, `amber-50` — custos, avisos
- **Error (red):** `red-50`, `red-200`, `red-600`, `red-700`, `red-900` — erros, padrões ruins

**Cores proibidas:** cyan, pink, orange, indigo, teal, violet, fuchsia (usar equivalentes acima)

### Tipografia

- **Fonte:** Inter (Google Fonts)
- **Escala:** `text-xs` (12px), `text-sm` (14px), `text-base` (16px), `text-lg` (18px), `text-xl` (20px), `text-2xl` (24px)
- **Peso:** `font-normal` (400), `font-medium` (500), `font-semibold` (600), `font-bold` (700)
- **Headings:** `font-medium`, line-height 1.5, sentence case

### Cards & Layout

- Background: `bg-white` w/ `border border-slate-200`, `rounded-lg` (0.625rem)
- Tinted variants: `bg-purple-50/50 border-purple-200`, `bg-green-50 border-green-200`
- No drop shadows (flat design)
- Sidebar: 240px fixed, `bg-white`, right border `slate-200`
- Main: `max-w-5xl mx-auto p-4 md:p-6`

### Ícones

- **Biblioteca:** Lucide React exclusivamente
- **Tamanhos:** `w-4 h-4` (nav), `w-5 h-5` (section), `w-6 h-6` (feature), `w-8 h-8` (header)
- **Cores:** `text-purple-600` (brand), `text-slate-400` (inactive), semânticas conforme contexto

## Regras Importantes

- Não modificar arquivos em `src/app/components/ui/` (componentes shadcn/ui gerados)
- O projeto foi exportado do Figma Make — manter os plugins `react()` e `tailwindcss()` no `vite.config.ts`
- Não adicionar `.css`, `.tsx` ou `.ts` ao `assetsInclude` do Vite
- SVG e CSV são importados como assets raw (`assetsInclude: ['**/*.svg', '**/*.csv']`)
- **Usar apenas cores do design system** — nenhum cyan, pink, orange, indigo, teal, violet, fuchsia
