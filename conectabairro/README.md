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

## Arquitetura do Sistema

O projeto adota uma arquitetura *serverless* e de baixo custo, ideal para a extensão universitária:
- **Frontend:** Desenvolvido em React consumindo dados via biblioteca `papaparse`.
- **Banco de Dados (Leitura):** Planilha do Google Sheets publicada como CSV.
- **Painel de Cadastro:** Google Forms. Os usuários se cadastram no formulário e os dados populam automaticamente a planilha do Google Sheets, atualizando o site em tempo real sem necessidade de backend dedicado.
- **Hospedagem:** GitHub Pages (`gh-pages`).

---

## Roadmap (Concluído ✅)

- ✅ Setup completo (Vite + React + JavaScript puro)
- ✅ Estrutura base de pastas e mock data
- ✅ Componentes dinâmicos com link WhatsApp otimizado
- ✅ Integração com Google Sheets / CSV via PapaParse
- ✅ Fallback de avatar para imagens vazias
- ✅ Botão de Cadastro via Google Forms
- ✅ Deploy no GitHub Pages configurado

---

## Notas

- **Paleta de cores:** Verde primário (#2E8B57) com destaque em verde WhatsApp (#25D366)
- **Dados:** Consumidos de `src/data/mockData.json` — facilmente substituível por API/Google Sheets
- **Responsividade:** Grid layout auto-responsivo com mobile-first
- **Acessibilidade:** Semântica HTML5 e atributos ARIA quando necessário

---

## Autores

Projeto acadêmico — PUCPR

