# ConectaBairro

Vitrine virtual comunitária para pequenos empreendedores — conectando moradores a prestadores de serviço locais via WhatsApp.

**Projeto acadêmico de extensão (PUCPR) — Dupla**

---

## Tecnologias

- **React** (via Vite)
- **JavaScript** (puro, sem TypeScript)
- **CSS** (puro, sem frameworks)
- **Vite** (build tool)

---

## Instalação e Execução

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar em desenvolvimento
```bash
npm run dev
```
Acesse [http://localhost:5173](http://localhost:5173) no navegador.

### 3. Fazer build para produção
```bash
npm run build
```

### 4. Preview do build
```bash
npm run preview
```

---

## Estrutura do Projeto

```
conectabairro/
├── docs/              # Documentação do projeto
│   ├── REQUIREMENTS.md
│   ├── DESIGN.md
│   └── TASKS.md
├── public/            # Arquivos estáticos
├── src/
│   ├── components/    # Componentes React
│   │   ├── Header.jsx
│   │   └── CardProfissional.jsx
│   ├── data/          # Dados mock (JSON)
│   │   └── mockData.json
│   ├── styles/        # Estilos CSS
│   │   └── global.css
│   ├── App.jsx        # Componente principal
│   └── main.jsx       # Entry point
├── index.html
├── package.json
└── tsconfig.json
```

---

## Roadmap (Fase 1 — Completa ✅)

- ✅ Setup completo (Vite + React + JavaScript puro)
- ✅ Estrutura base de pastas (`components/`, `data/`, `styles/`)
- ✅ Documentação inicial (`docs/`)
- ✅ Mock data com 2 profissionais
- ✅ Componentes `Header` e `CardProfissional`
- ✅ Renderização de cards com link WhatsApp

### Próximas Fases

- [ ] Fase 2: Integração com Google Sheets / CSV
- [ ] Fase 2: Pesquisa e filtragem
- [ ] Fase 3: Deploy no GitHub Pages

---

## Notas

- **Paleta de cores:** Verde primário (#2E8B57) com destaque em verde WhatsApp (#25D366)
- **Dados:** Consumidos de `src/data/mockData.json` — facilmente substituível por API/Google Sheets
- **Responsividade:** Grid layout auto-responsivo com mobile-first
- **Acessibilidade:** Semântica HTML5 e atributos ARIA quando necessário

---

## Autores

Projeto acadêmico — PUCPR

