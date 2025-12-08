# Automation Exercise – Projeto de Testes (Cypress + API + JMeter)

## 👥 Grupo UNIPE
**PS em Desenvolvimento de Aplicações Web - Módulo Teste de Software**

- **Artur Freitas Palmeira** — RGM 42900590  
  [artur.palmeira@cs.unipe.edu.br](mailto:artur.palmeira@cs.unipe.edu.br)
- **Geraldo Camilo F. T. Valencia** — RGM 44194153  
  [geraldovalencia@gmail.com](mailto:geraldovalencia@gmail.com)
- **Robson Lima Palmeira** — RGM 44214341  
  [robson.palmeira@cs.unipe.edu.br](mailto:robson.palmeira@cs.unipe.edu.br)

## 📋 Conteúdo do Projeto
- Casos manuais detalhados (docs/)
- Automação E2E e API (cypress/)
- Pipeline CI (GitHub Actions)
- Evidências (evidencias/)
- **JMeter** - Teste de performance 1000+ requisições (jmeter/)

## 🚀 Executar localmente
1. Instale dependências:
npm ci


2. Testes E2E:
npm run test:e2e


3. Testes API:
npm run test:api



## 🔄 CI/CD Pipeline
- Cypress: `.github/workflows/cypress.yml`
- **JMeter**: `.github/workflows/jmeter.yml`
- Artefatos (screenshots/videos/reports) disponíveis nas Actions

## ⚡ JMeter Performance
- Arquivo: `jmeter/Projeto-de-Testes-WebCom-AutomationExercise.jmx`
- 1000+ requisições simultâneas no `automationexercise.com`
- Relatórios HTML gerados automaticamente na CI

## 📊 Status
✅ **Cypress E2E + API** - Pipeline rodando  
✅ **JMeter** - Script + GitHub Actions  
✅ **Documentação** - Casos manuais + Evidências  
🔄 **Aguardando aprovação Pull Request**