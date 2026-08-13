# ConectaBairro — Design

## Arquitetura Front-end
- Framework: React (Vite) — aplicação single-page minimal.
- Estrutura: `Header`, `Grid` de `CardProfissional`, `Footer`.
- Dados: consumidos de `src/data/mockData.json` (substituível por API/Google Sheets).

## Paleta de Cores
- Primária: #2E8B57 (verde médio — sensação comunitária)
- Secundária: #25D366 (verde WhatsApp para ações de contato)
- Neutros: #ffffff (fundo), #f5f5f5 (cards), #333333 (texto)

## Tipografia
- Fonte: sistema (sans-serif) — prioridade em legibilidade e performance.
- Escalas: H1 28px, H2 20px, Body 16px, Small 14px.

## Layout Base
- Header: título simples e descrição curta.
- Main: grid responsivo de cards (1 coluna em mobile, 2-3 em tablet/desktop).
- CardProfissional: foto, nome, profissão, breve descrição e botão/link para WhatsApp.
- Footer: créditos e link para repositório acadêmico.

## Notas de Acessibilidade
- Contrast ratios suficientes para textos.
- Botões com labels claros e atributos `aria` quando necessário.
