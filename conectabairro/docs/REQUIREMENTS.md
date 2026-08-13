# ConectaBairro — Requirements

## Visão Geral
ConectaBairro é uma vitrine virtual comunitária para pequenos empreendedores locais. Objetivo: conectar moradores a prestadores de serviço e microcomércios locais via contato direto (WhatsApp). Projeto acadêmico de extensão (PUCPR).

## Escopo
- Vitrine de profissionais/lojas locais com informações de contato direto por WhatsApp.
- Sem carrinho de compras, sem gateway de pagamento.
- Sem autenticação — acesso público e leitura apenas.

## Requisitos Funcionais
1. Exibir lista de cards de profissionais com foto, nome, profissão e descrição.
2. Cada card deve ter botão ou link que abra conversa no WhatsApp (pré-preenchido com número do profissional).
3. Dados devem ser fáceis de atualizar via JSON local ou provindos de Google Sheets (export/CSV).
4. Pesquisa/filtragem básica (Fase 2).
5. Layout responsivo e acessível.

## Requisitos Não Funcionais
- Front-end em React (Vite) com JavaScript e CSS puro.
- Uso de um JSON leve como fonte de dados (ou integração futura com Google Sheets).
- Design responsivo (mobile-first), otimizado para performance e baixo consumo de dados.
- Código organizado em componentes e documentado em `docs/`.
