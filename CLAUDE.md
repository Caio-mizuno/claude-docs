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

## Regras Importantes

- Não modificar arquivos em `src/app/components/ui/` (componentes shadcn/ui gerados)
- O projeto foi exportado do Figma Make — manter os plugins `react()` e `tailwindcss()` no `vite.config.ts`
- Não adicionar `.css`, `.tsx` ou `.ts` ao `assetsInclude` do Vite
- SVG e CSV são importados como assets raw (`assetsInclude: ['**/*.svg', '**/*.csv']`)
