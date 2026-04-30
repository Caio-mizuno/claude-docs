# Como aplicar as melhorias visuais no projeto

Copie os arquivos da pasta `patches/` para os destinos abaixo no repositório `claude-docs/`.

---

## Arquivos a substituir

### 1. `index.html` (raiz do projeto)
```
patches/index.html  →  claude-docs/index.html
```
**O que muda:** Adiciona as fontes Inter e JetBrains Mono via Google Fonts com preconnect para carregamento rápido.

---

### 2. `src/styles/fonts.css`
```
patches/fonts.css  →  claude-docs/src/styles/fonts.css
```
**O que muda:** Define as variáveis `--font-sans` e `--font-mono`, ativa `font-optical-sizing: auto` e antialiasing em todo o site.

---

### 3. `src/styles/theme.css`
```
patches/theme.css  →  claude-docs/src/styles/theme.css
```
**O que muda:**
- Purple refinado: `#7c3aed` (era `#9333ea`) — mais elegante, menos saturado
- Background: `#f8fafc` (era `#ffffff`) — leve warm off-white
- Border: `rgba(0,0,0,0.08)` (era `0.10`) — mais sutil
- Headings: `font-weight: 700/600` com `letter-spacing: -0.025em/-0.02em` — mais impacto tipográfico
- Sidebar accent usa purple light (`#f5f0ff`) — consistente com estado ativo

---

## Comandos para aplicar

```bash
# No terminal, a partir da raiz do claude-docs:
cp /caminho/para/design-system/patches/index.html ./index.html
cp /caminho/para/design-system/patches/fonts.css ./src/styles/fonts.css
cp /caminho/para/design-system/patches/theme.css ./src/styles/theme.css

# Rodar dev para ver o resultado:
npm run dev
```

---

## Nenhum componente TSX precisa ser modificado

Todas as mudanças são no nível de CSS custom properties e variáveis globais.
O Tailwind lê esses tokens automaticamente — classes como `text-primary`,
`bg-purple-600`, `border-border` e `bg-sidebar` já refletem os novos valores.

---

## Resultado esperado

| Antes | Depois |
|---|---|
| Fonte: system-ui genérica | Inter com optical sizing |
| Purple: `#9333ea` (saturado) | Purple: `#7c3aed` (refinado) |
| Headings: weight 500, sem tracking | Headings: weight 600-700, tracking negativo |
| Antialiasing: padrão browser | `-webkit-font-smoothing: antialiased` |
| Background: branco puro | Off-white `#f8fafc` (igual ao slate-50) |
| Border: 10% opacidade | Border: 8% opacidade (mais sutil) |
