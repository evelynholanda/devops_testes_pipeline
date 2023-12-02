# Testes automatizados com Cypress - Básico

👋 Seja bem-vindo(a)!

## O que eu aprendi


- Como configurar um projeto Cypress do zero
- Como visitar páginas locais e remotas
- Como lidar com os elementos mais comuns encontrados em aplicações web
- Como testar _upload_ de arquivos
- Como realizar as mais diversas verificações de resultados esperados
- Como criar comandos customizados
- Como lidar com links que abrem em outra aba do navegador
- Como rodar testes simulando as dimensões de um dispositivo móvel
- Como resolver os mesmos problemas de diferentes formas, conhecendo a [API do Cypress](https://docs.cypress.io/api/table-of-contents)
- Como executar os testes em um _pipeline_ de integração contínua sempre que mudanças ocorrerem no código da aplicação (ou dos testes)
- Como criar uma documentação mínima para seu projeto de testes automatizados

### Project

CAC-TAT

Sample project to demonstrate my evoltion in Basic Cypress

#### Pre-requirements
It is required to have>
- Node.js and npm installed

I used versions v13.13.2 and 8.3.0 of Node.js and npm, respectively. I suggest you use the same or later versions.

##### Installation
Run npm install (or npm i for the short version) to install the dev dependencies.

Tests
You can run the tests simulating this project with Desktop ou Mobile viewport

##### Desktop
Run 'npm test' (or npm t for the short version) to run the test in headless mode or a desktop viewport

Or, run 'npm run cy:open' to open Cypress in interactive mode or a desktop viewport

##### Mobile

Run 'npm run test:mobile' (or npm t for the short version) to run the test headless mode or a desktop viewport

Or, 'run npm run cy:open:mobile' to open Cypress in headless mode or a desktop viewport

This project was created with 💚 by Evelyn Holanda