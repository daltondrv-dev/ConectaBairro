# ConectaBairro — Roadmap (Checklist)

# ConectaBairro — Roadmap (Checklist)

## Fase 1 — Setup e Mock UI ✅ CONCLUÍDA
- [x] Inicializar projeto com Vite + React (template)
- [x] Criar documentação inicial (`docs/`)
- [x] Criar estrutura de componentes em `src/components`
- [x] Adicionar `mockData.json` com exemplos
- [x] Implementar `Header` e `CardProfissional` básicos
- [x] Conectar `App.jsx` para renderizar os cards a partir do `mockData.json`
- [x] Criar CSS moderno com reset, variáveis e layout responsivo
- [x] Implementar lógica de WhatsApp com mensagem pré-preenchida
- [x] Estilizar cards com hover effects e design mobile-first
- [x] Adicionar fallback de avatar com inicial do nome

## Fase 2 — Integração de Dados ✅ CONCLUÍDA (Etapa 1)
- [x] Instalar PapaParse para leitura de CSV
- [x] Criar `src/services/api.js` com `fetchProfissionais()`
- [x] Integrar Google Sheets (CSV) como fonte de dados
- [x] Implementar `useState` e `useEffect` em `App.jsx`
- [x] Adicionar estados de loading, error e empty
- [x] Estilos para mensagens de status (loading/erro/vazio)

## Fase 3 — Deploy 🚀 EM PROGRESSO
- [x] Ajustar URL WhatsApp API (`api.whatsapp.com/send`)
- [x] Limpeza de telefone com regex (`.replace(/\D/g, '')`)
- [x] Criar `vite.config.js` com `base: '/ConectaBairro/'`
- [x] Instalar @vitejs/plugin-react e gh-pages
- [x] Configurar scripts: `predeploy` e `deploy`
- [ ] Testar build local
- [ ] Fazer deploy no GitHub Pages
- [ ] Validar URL pública: `https://usuario.github.io/ConectaBairro/`
